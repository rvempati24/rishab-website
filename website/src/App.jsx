import { useEffect, useState, useRef } from 'react'
import './styles/globals.css'

function App() {
  const [showTyping, setShowTyping] = useState(false)
  const [particles, setParticles] = useState([])
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const targetsRef = useRef([])
  const heroRef = useRef(null)

  // Generate random particles
  const generateParticles = (count = 3000) => {
    const newParticles = []
    const container = heroRef.current
    const cw = container ? container.clientWidth : window.innerWidth
    const ch = container ? container.clientHeight : window.innerHeight
    const minX = 0
    const maxX = cw
    const minY = 0
    const maxY = ch

    for (let i = 0; i < count; i++) {
      // Scatter across full hero area with light clustering for natural look
      const clusterX = minX + Math.random() * (maxX - minX)
      const clusterY = minY + Math.random() * (maxY - minY)
      const spread = 60
      let x = clusterX + (Math.random() - 0.5) * spread
      let y = clusterY + (Math.random() - 0.5) * spread
      // clamp inside bounds
      x = Math.max(minX, Math.min(maxX, x))
      y = Math.max(minY, Math.min(maxY, y))
      
      newParticles.push({
        id: i,
        x,
        y,
        targetX: 0,
        targetY: 0,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.2 + 0.8,
        opacity: Math.random() * 0.4 + 0.4
      })
    }
    setParticles(newParticles)
  }

  // Rasterize text to points (targets) using an offscreen canvas
  const getTextTargets = (text, canvasWidth, canvasHeight) => {
    const off = document.createElement('canvas')
    const padding = 40
    off.width = Math.min(1200, Math.max(600, Math.floor(canvasWidth * 0.8)))
    off.height = 220
    const octx = off.getContext('2d')
    octx.clearRect(0, 0, off.width, off.height)
    octx.fillStyle = '#ffffff'
    octx.textBaseline = 'middle'
    const fontSize = Math.min(180, Math.max(100, Math.floor(off.width / 10)))
    octx.font = `700 ${fontSize}px Inter, system-ui, sans-serif`
    const metrics = octx.measureText(text)
    const textWidth = metrics.width
    const x = Math.max(padding, (off.width - textWidth) / 2)
    const y = Math.floor(off.height / 2)
    octx.fillText(text, x, y)

    const gap = 5 // sampling gap; smaller = more points
    const img = octx.getImageData(0, 0, off.width, off.height).data
    const targets = []
    for (let yy = 0; yy < off.height; yy += gap) {
      for (let xx = 0; xx < off.width; xx += gap) {
        const idx = (yy * off.width + xx) * 4 + 3 // alpha channel
        if (img[idx] > 128) {
          const worldX = (canvasWidth - off.width) / 2 + xx
          const worldY = (canvasHeight - off.height) / 2 - 50 + yy
          targets.push({ x: worldX, y: worldY })
        }
      }
    }
    return targets
  }

  useEffect(() => {
    const onResize = () => {
      const container = heroRef.current
      if (!container || !canvasRef.current) return
      const cw = container.clientWidth
      const ch = container.clientHeight
      targetsRef.current = getTextTargets('RISHAB VEMPATI', cw, ch)
      generateParticles()
    }
    // initial setup after first paint
    setTimeout(onResize, 0)
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Observe sections to fade them in/out on scroll
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.section'))
    if (sections.length === 0) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const options = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('in-view')
        } else {
          // Toggle off to allow disappearing when out of view
          el.classList.remove('in-view')
        }
      })
    }, options)

    sections.forEach((sec) => {
      if (!prefersReduced) observer.observe(sec)
      else sec.classList.add('in-view')
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size to hero container
    const container = heroRef.current
    const cw = container ? container.clientWidth : window.innerWidth
    const ch = container ? container.clientHeight : window.innerHeight
    canvas.width = cw
    canvas.height = ch

    // Prepare target positions from rasterized text
    const targetPositions = targetsRef.current

    let animationTime = 0
    const startDelay = 1500 // 1.5s to let user see scattered dots
    const moveDuration = 10000 // 10s movement after delay
    const totalAnimationTime = startDelay + moveDuration
    const holdTime = 0 // no artificial pause

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      animationTime += 16 // ~60fps
      const progress = Math.min(animationTime / totalAnimationTime, 1)
      
      particles.forEach((particle, index) => {
        // Assign target positions by wrapping index across available targets
        if (targetPositions.length > 0) {
          const target = targetPositions[index % targetPositions.length]
          particle.targetX = target.x
          particle.targetY = target.y
        }

        // Strict time-based interpolation with initial delay
        if (animationTime <= 16) {
          // store start positions at first frame
          particle.sx = particle.x
          particle.sy = particle.y
        }

        // During delay, keep particles still (show scattered state)
        if (animationTime < startDelay) {
          // no movement; just draw
        } else {
          // movement: map time into [0,1]
          const tRaw = (animationTime - startDelay) / moveDuration
          const t = Math.max(0, Math.min(1, tRaw))
          // smoothstep easing for clarity
          const eased = t * t * (3 - 2 * t)
          particle.x = particle.sx + (particle.targetX - particle.sx) * eased
          particle.y = particle.sy + (particle.targetY - particle.sy) * eased
        }

        // Draw particle with consistent opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        const alpha = particle.opacity
        ctx.fillStyle = `rgba(229, 229, 229, ${alpha})`
        ctx.fill()
      })

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        animationRef.current = null
        // Start subtitle immediately when merge completes
        setShowTyping(true)
      }
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles])

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <a href="#home" className="nav-brand">RV</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      
      <div id="home" className="container" ref={heroRef}>
        <canvas 
          ref={canvasRef} 
          className="particles-canvas"
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        />
        <div className="name-container" aria-hidden="true" />
        
        {showTyping && (
          <div className="subtitle-container">
            <h2 className="subtitle-text">Software Developer</h2>
          </div>
        )}
      </div>

      <main className="site-main">
        <section id="about" className="section">
          <div className="section-content">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                <p className="lead">I'm a passionate software developer with a love for creating elegant solutions to complex problems.</p>
                <p>With expertise in modern web technologies and a keen eye for design, I specialize in building user-centric applications that combine functionality with aesthetic appeal.</p>
                <div className="skills">
                  <h3>Skills & Technologies</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">AWS</span>
                  </div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-content">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">E-Commerce Platform</div>
                </div>
                <div className="project-content">
                  <h3>Modern E-Commerce Platform</h3>
                  <p>Full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Stripe</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">Task Management App</div>
                </div>
                <div className="project-content">
                  <h3>Collaborative Task Manager</h3>
                  <p>Real-time collaborative task management application with drag-and-drop functionality and team features.</p>
                  <div className="project-tech">
                    <span>Vue.js</span>
                    <span>Socket.io</span>
                    <span>PostgreSQL</span>
                    <span>Redis</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">Data Visualization</div>
                </div>
                <div className="project-content">
                  <h3>Interactive Data Dashboard</h3>
                  <p>Dynamic data visualization dashboard with real-time updates and customizable charts and graphs.</p>
                  <div className="project-tech">
                    <span>D3.js</span>
                    <span>Python</span>
                    <span>Flask</span>
                    <span>SQLite</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-content">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Let's work together</h3>
                <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">📧</div>
                    <div>
                      <div className="contact-label">Email</div>
                      <div className="contact-value">rishab@example.com</div>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">💼</div>
                    <div>
                      <div className="contact-label">LinkedIn</div>
                      <div className="contact-value">linkedin.com/in/rishabvempati</div>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">🐙</div>
                    <div>
                      <div className="contact-label">GitHub</div>
                      <div className="contact-value">github.com/rishabvempati</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
