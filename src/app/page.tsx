import Navbar from "@/components/ui/Navbar";
import Scene from "@/components/canvas/Scene";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 w-full h-full">
          <Scene />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono animate-fade-in-up">
            Hello World, I&apos;m
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up delay-100">
            Rishab Vempati
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            Software Engineer specializing in building exceptional digital experiences.
            Passionate about scalable architecture and intuitive design.
          </p>
          
          <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all hover:scale-105 flex items-center gap-2"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-slate-700 bg-slate-950/50 backdrop-blur-sm text-slate-200 hover:bg-slate-900 transition-all hover:border-slate-500"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <span className="font-mono text-xs">scroll down</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading 
            number="01" 
            title="About Me" 
          />
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 text-slate-400 leading-relaxed space-y-4">
              <p>
                Hello! I&apos;m Rishab, a software engineer who loves bridging the gap between design and engineering.
                I enjoy building things that live on the internet, whether that be websites, applications, or anything in between.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Tailwind CSS'].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-cyan-500">▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <span className="text-slate-600 font-mono">Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading 
            number="02" 
            title="Featured Projects" 
            subtitle="A selection of things I've built."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Project Alpha"
              description="A robust web application built for analyzing high-frequency data streams. Features real-time visualization and predictive modeling."
              tags={["Next.js", "TypeScript", "D3.js", "Supabase"]}
              links={{ github: "#", demo: "#" }}
            />
             <ProjectCard 
              title="Beta Commerce"
              description="Modern e-commerce platform with headless architecture, featuring instant search, cart management, and seamless checkout."
              tags={["React", "Redux", "Stripe", "Tailwind"]}
              links={{ github: "#", demo: "#" }}
            />
             <ProjectCard 
              title="Gamma Tools"
              description="A CLI tool for developers to automate standard scaffolding tasks. Built with Rust for maximum performance."
              tags={["Rust", "CLI", "Shell"]}
              links={{ github: "#" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionHeading number="03" title="Get In Touch" />
          <p className="text-slate-400 mb-8 text-lg">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I&apos;ll try my best to get back to you!
          </p>
          <a 
            href="mailto:rvempati@example.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-mono"
          >
            <Mail className="w-5 h-5" /> Say Hello
          </a>

          <div className="mt-20 flex justify-center gap-6">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <footer className="mt-12 text-slate-600 text-sm font-mono">
            <p>Designed & Built by Rishab Vempati</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
