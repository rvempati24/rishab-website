import { useEffect, useState, useRef } from 'react'
import './styles/globals.css'

function App() {
  const [showTyping, setShowTyping] = useState(false)
  const [particles, setParticles] = useState([])
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const targetsRef = useRef([])

  // Generate random particles
  const generateParticles = (count = 3000) => {
    const newParticles = []
    const cw = window.innerWidth
    const ch = window.innerHeight
    let minX = cw * 0.25
    let maxX = cw * 0.75
    let minY = ch * 0.3
    let maxY = ch * 0.6

    // If text targets are available, confine to that rectangle (with small margin)
    const t = targetsRef.current
    if (t && t.length > 0) {
      minX = Math.min(...t.map(p => p.x))
      maxX = Math.max(...t.map(p => p.x))
      minY = Math.min(...t.map(p => p.y))
      maxY = Math.max(...t.map(p => p.y))
      const mx = 20; const my = 20
      minX -= mx; maxX += mx; minY -= my; maxY += my
    }

    for (let i = 0; i < count; i++) {
      const x = minX + Math.random() * (maxX - minX)
      const y = minY + Math.random() * (maxY - minY)
      newParticles.push({
        id: i,
        x,
        y,
        targetX: 0,
        targetY: 0,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.5 + 0.6,
        opacity: Math.random() * 0.6 + 0.3
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
      if (!canvasRef.current) return
      const cw = window.innerWidth
      const ch = window.innerHeight
      targetsRef.current = getTextTargets('RISHAB VEMPATI', cw, ch)
      // regenerate particles to stay within the new target rectangle
      generateParticles()
    }
    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

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
      <canvas 
        ref={canvasRef} 
        className="particles-canvas"
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 1 }}
      />
      
      <div id="home" className="container">
        <div className="name-container" aria-hidden="true" />
        
        {showTyping && (
          <div className="subtitle-container">
            <h2 className="subtitle-text">Software Developer</h2>
          </div>
        )}
      </div>

      <main className="site-main">
        <section id="about" className="section">
          {/* content intentionally left blank */}
        </section>
        <section id="projects" className="section">
          {/* content intentionally left blank */}
        </section>
        <section id="contact" className="section">
          {/* content intentionally left blank */}
        </section>
      </main>
    </>
  )
}

export default App
