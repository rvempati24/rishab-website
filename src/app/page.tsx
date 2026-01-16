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
            Passionate Software Engineer.
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
          <SectionHeading number="01" title="About Me" />
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 text-slate-400 leading-relaxed space-y-4">
              <p>
                I am a Computer Science & Artificial Intelligence student at
                Purdue University.
              </p>
              <p>
                With a strong foundation in cloud computing and full-stack
                development, I specialize in building scalable, AI-driven
                applications and optimizing high-frequency systems. My
                experience ranges from architecting enterprise RAG pipelines to
                engineering financial transaction engines.
              </p>
              <div className="mt-8 space-y-6">
                <h3 className="font-bold text-slate-200">Technical Skills</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Java", "C++", "C", "C#", "SQL", "JavaScript", "TypeScript", "Bash", "Shell", "R", "HTML/CSS"].map(skill => (
                        <span key={skill} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {["FastAPI", "Flask", "React", "Next.js", "Node.js", ".NET", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Tailwind"].map(skill => (
                        <span key={skill} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">Developer Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Kubernetes", "Kafka", "Redis", "Git", "GitHub Actions", "Linux", "Azure", "AWS", "PostgreSQL", "MongoDB"].map(skill => (
                        <span key={skill} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {["AWS Certified Cloud Practitioner", "Microsoft Azure Fundamentals (AZ-900)"].map(skill => (
                         <span key={skill} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <span className="text-slate-600 font-mono">
                    Image Placeholder
                  </span>
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
              title="YourPingMe"
              description="A unified AI wrapper and scheduling engine that aggregates major LLM providers to execute complex prompts at user-defined intervals."
              tags={["Python", "React", "Redis", "Celery", "LLM APIs"]}
              links={{ github: "https://github.com/rvempati24" }}
            />
            <ProjectCard
              title="Parking Lot Detection"
              description="Led the development of a U-Net segmentation model for satellite imagery that automated data ingestion for over 50GB of mapping data."
              tags={["Python", "PyTorch", "OpenCV", "Docker"]}
              links={{ github: "https://github.com/rvempat/TDM_111-OSM-Project" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionHeading number="03" title="Get In Touch" />
          <p className="text-slate-400 mb-8 text-lg">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
          <a
            href="mailto:rishabvempati.2004@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 font-mono"
          >
            <Mail className="w-5 h-5" /> Say Hello
          </a>

          <div className="mt-20 flex justify-center gap-6">
            <a
              href="https://github.com/rvempati24"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/rishab-vempati"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
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
