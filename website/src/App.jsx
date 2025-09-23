import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [particles, setParticles] = useState([])

  // Generate floating particles for background
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          animationDelay: Math.random() * 6
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <>
      {/* Animated background particles */}
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="hero-container">
        <div className="name-container">
          <h1 className="name-text glitch" data-text="RISHAB">
            RISHAB
          </h1>
        </div>
        
        <div className="subtitle">
          Welcome to the Future
        </div>

        <div className="holographic-border">
          <p style={{ 
            color: '#00ffff', 
            fontSize: '1.2rem', 
            margin: 0,
            textShadow: '0 0 10px #00ffff'
          }}>
            Software Developer & Digital Innovator
          </p>
        </div>
      </div>
    </>
  )
}

export default App
