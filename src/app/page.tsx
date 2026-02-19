import Navbar from "@/components/ui/Navbar";
import Scene from "@/components/canvas/Scene";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { ArrowRight, Mail, Linkedin, Github, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
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
            CS & AI Student at Purdue University.
          </p>

          <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
            <a
              href="/resume.pdf"
              className="px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all hover:scale-105 flex items-center gap-2"
            >
              Resume <FileText className="w-4 h-4" />
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
                I&apos;m a Computer Science & Artificial Intelligence student at
                Purdue University interested in machine learning research, with
                a focus on information retrieval and applied ML.
              </p>
              <p>
                I have industry experience building production systems and am
                currently seeking research opportunities to deepen my expertise
                in ML.
              </p>

              <div className="py-2">
                <h3 className="font-bold text-slate-200 mb-2">
                  Research Interests
                </h3>
                <p className="text-sm text-slate-400">
                  Information Retrieval, RAG Systems, Applied Machine Learning,
                  Computer Vision, Efficient Transformers.
                </p>
              </div>

              <div className="py-2">
                <h3 className="font-bold text-slate-200 mb-2">Coursework</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Analysis of Algorithms, Data Structures, Operating Systems,
                  Computer Architecture, Database Systems, Intro to AI,
                  Probability & Statistics, Linear Algebra, Multivariable
                  Calculus, Discrete Math, OOP.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="font-bold text-slate-200">Technical Skills</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">
                      AI & Machine Learning
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "PyTorch",
                        "TensorFlow",
                        "JAX",
                        "LangChain",
                        "LangGraph",
                        "OpenCV",
                        "Scikit-learn",
                        "Pandas",
                        "NumPy",
                        "Pinecone",
                        "Elasticsearch",
                        "Apache Spark",
                        "MCP",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">
                      Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "Java",
                        "C++",
                        "C",
                        "C#",
                        "SQL",
                        "JavaScript",
                        "TypeScript",
                        "Bash",
                        "R",
                        "HTML/CSS",
                        "Assembly",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-cyan-400 font-mono text-sm mb-2">
                      Frameworks & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "FastAPI",
                        "Flask",
                        "React",
                        "Next.js",
                        "Node.js",
                        ".NET",
                        "Tailwind",
                        "Docker",
                        "Kubernetes",
                        "Apache Kafka",
                        "Redis",
                        "Git",
                        "AWS",
                        "Azure",
                        "PostgreSQL",
                        "MongoDB",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                        >
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
                <div className="relative aspect-square rounded-lg bg-slate-900 border border-slate-800 overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Rishab Vempati"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            number="02"
            title="Work Experience"
            subtitle="My professional journey."
          />
          <div className="space-y-12">
            {/* Ekai */}
            <div className="relative border-l-2 border-slate-800 pl-8 ml-4 md:ml-0 space-y-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 box-content border-4 border-slate-950" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">Ekai</h3>
                <span className="font-mono text-sm text-cyan-400">
                  Aug. 2025 – Feb. 2026
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                <h4 className="text-lg text-slate-300">
                  Software Engineer - Part Time
                </h4>
                <span className="text-sm text-slate-500 font-mono">Remote</span>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-slate-400 marker:text-cyan-500/50">
                <li>
                  Built a RAG pipeline using Pinecone to index and retrieve
                  context from 10,000+ docs with 92% retrieval accuracy.
                </li>
                <li>
                  Developed an AI assistant for Microsoft Teams with Flask,
                  enabling natural language querying of knowledge bases.
                </li>
                <li>
                  Deployed the retrieval system as an MCP Server, enabling
                  interoperability across multiple AI agent clients.
                </li>
                <li>
                  Integrated SQL retrieval and response caching, cutting P95
                  latency from 8.2s to 1.8s for 50+ concurrent users.
                </li>
              </ul>
            </div>

            {/* AssetMark */}
            <div className="relative border-l-2 border-slate-800 pl-8 ml-4 md:ml-0 space-y-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 box-content border-4 border-slate-950" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">AssetMark</h3>
                <span className="font-mono text-sm text-slate-500">
                  Jun. 2025 – Aug. 2025
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                <h4 className="text-lg text-slate-300">
                  Software Engineering Intern
                </h4>
                <span className="text-sm text-slate-500 font-mono">
                  San Francisco, CA
                </span>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-slate-400 marker:text-cyan-500/50">
                <li>
                  Migrated legacy .NET/C# communication service to event-driven
                  microservices using Azure Service Bus.
                </li>
                <li>
                  Implemented dead-letter queues and exponential backoff retry,
                  reducing message failure rate from 0.8% to 0.12%.
                </li>
                <li>
                  Decoupled 5 service dependencies into independently deployable
                  microservices with API gateways.
                </li>
                <li>
                  Enabled autoscaling that handled 1M+ quarterly emails with
                  99.7% delivery success rate during traffic spikes.
                </li>
              </ul>
            </div>

            {/* Accelera Payments */}
            <div className="relative border-l-2 border-slate-800 pl-8 ml-4 md:ml-0 space-y-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 box-content border-4 border-slate-950" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">
                  Accelera Payments
                </h3>
                <span className="font-mono text-sm text-slate-500">
                  May 2024 – Aug. 2024
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                <h4 className="text-lg text-slate-300">
                  Software Engineering Intern
                </h4>
                <span className="text-sm text-slate-500 font-mono">
                  San Francisco, CA
                </span>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-slate-400 marker:text-cyan-500/50">
                <li>
                  Implemented Kafka streaming pipeline for ISO 20022 payment
                  processing, load-tested to 50K+ daily transactions.
                </li>
                <li>
                  Containerized 4 microservices with Docker multi-stage builds
                  in GitLab CI/CD, cutting deploy time by 80%.
                </li>
                <li>
                  Developed a comprehensive integration test suite to validate
                  pipeline reliability and data integrity.
                </li>
                <li>
                  Built Grafana dashboards to monitor system health, tracking
                  850 msg/sec throughput and 120ms P99 latency.
                </li>
              </ul>
            </div>

            {/* Cisco */}
            <div className="relative border-l-2 border-slate-800 pl-8 ml-4 md:ml-0 space-y-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 box-content border-4 border-slate-950" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100">Cisco</h3>
                <span className="font-mono text-sm text-slate-500">
                  Jan. 2024 – May 2024
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                <h4 className="text-lg text-slate-300">
                  Undergraduate Researcher – Data Science
                </h4>
                <span className="text-sm text-slate-500 font-mono">
                  West Lafayette, IN
                </span>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-slate-400 marker:text-cyan-500/50">
                <li>
                  Built demand forecasting models with Random Forest and
                  XGBoost, improving MAPE by 18% over ARIMA.
                </li>
                <li>
                  Optimized ETL pipeline with Apache Spark for distributed
                  processing, cutting runtime from 45 to 18 minutes.
                </li>
                <li>
                  Developed Bayesian inference models to simulate supply chain
                  disruption scenarios and quantify stockout risk.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            number="03"
            title="Featured Projects"
            subtitle="A selection of things I've built."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Ekai Enterprise RAG"
              description="Built a RAG pipeline for 10k+ documents with 92% accuracy. Deployed as an MCP Server and reduced P95 latency to 1.8s."
              tags={[
                "Python",
                "LangChain",
                "Pinecone",
                "PostgreSQL",
                "MCP Server",
                "Flask",
              ]}
              links={{}}
            />
            <ProjectCard
              title="Parking Lot Detection"
              description="Led a 5-person team building a U-Net segmentation model for satellite imagery, achieving 84% IoU accuracy."
              tags={[
                "PyTorch",
                "Computer Vision",
                "OpenCV",
                "Docker",
                "AWS EC2",
              ]}
              links={{
                github: "https://github.com/rvempat/TDM_111-OSM-Project",
              }}
            />
            <ProjectCard
              title="YourPingMe"
              description="Unified API wrapper for LLMs with a scheduling engine. Built with Redis/Celery for recurring API calls and async notifications."
              tags={["Python", "PostgreSQL", "Redis", "Celery", "LLM APIs"]}
              links={{ github: "https://github.com/rvempati24" }}
            />
            <ProjectCard
              title="Crux"
              description="Chrome Extension using Gemini API to analyze video content density and auto-adjust playback speed via a FastAPI backend."
              tags={["FastAPI", "Gemini API", "JavaScript", "Manifest V3"]}
              links={{ github: "https://github.com/rvempati24/Crux" }}
            />
            <ProjectCard
              title="Finnie AI Card Game"
              description="Multiplayer card game with an AI Practice Bot. Implemented using WebSocket for real-time state synchronization."
              tags={["React", "TensorFlow.js", "WebSockets", "Node.js"]}
              links={{ github: "https://github.com/rvempati24/finnie-ai" }}
            />
            <ProjectCard
              title="Personal Portfolio"
              description="3D interactive portfolio showcasing professional work. Built with modern web technologies for high performance."
              tags={["Next.js", "TypeScript", "Three.js", "Tailwind CSS"]}
              links={{ github: "https://github.com/rvempati24/rishab-website" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionHeading number="04" title="Get In Touch" />
          <p className="text-slate-400 mb-8 text-lg">
            I&apos;m currently seeking research opportunities in ML/AI and am
            open to connecting about graduate school, research collaborations,
            or industry roles.
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
              href="https://linkedin.com/in/rvempat"
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
