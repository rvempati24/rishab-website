import Navbar from "@/components/ui/Navbar";
import Scene from "@/components/canvas/Scene";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import Image from "next/image";

const news = [
  {
    date: "Aug 2026",
    text: "Joining IBM Watsonx Orchestrate as a Software Engineering Co-op.",
  },
  {
    date: "Feb 2026",
    text: "Started research in the CIDER Lab with Prof. Jason Wu; submitted uxCUA to UIST 2026.",
  },
];

const experience = [
  {
    role: "Software Engineering Co-op",
    org: "IBM — Watsonx Orchestrate",
    note: "Incoming co-op on IBM's enterprise AI-agent platform.",
    when: "Aug – Dec 2026",
    where: "Austin, TX",
  },
  {
    role: "Software Engineer, Part-Time",
    org: "Ekai",
    note: "Built RAG + MCP retrieval systems for enterprise knowledge.",
    when: "Aug 2025 – Feb 2026",
    where: "Remote",
  },
  {
    role: "Software Engineering Intern",
    org: "AssetMark",
    note: "Migrated a legacy service to event-driven microservices on Azure.",
    when: "Jun – Aug 2025",
    where: "San Francisco, CA",
  },
  {
    role: "Software Engineering Intern",
    org: "Accelera Payments",
    note: "Built a Kafka streaming pipeline for ISO 20022 payments.",
    when: "May – Aug 2024",
    where: "San Francisco, CA",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Intro */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Scene />
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-4xl pt-36 pb-20">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                Rishab Vempati
              </h1>
              <p className="text-muted leading-relaxed mb-4">
                I&apos;m a Computer Science &amp; Artificial Intelligence
                undergraduate at Purdue University. I research{" "}
                <span className="text-foreground">computer-use agents</span> in
                the CIDER Lab with Prof. Jason Wu — training vision-language
                models to navigate and evaluate user interfaces.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                I&apos;m broadly interested in agentic systems, reinforcement
                learning for LLMs, and information retrieval, and I&apos;m
                seeking research opportunities to deepen that work.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  <FileText className="w-4 h-4" /> Resume
                </a>
                <a
                  href="mailto:rishabvempati.2004@gmail.com"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-foreground hover:bg-card transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
                <a
                  href="https://github.com/rvempati24"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-foreground hover:bg-card transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/rvempat"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-foreground hover:bg-card transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="md:col-span-1 order-first md:order-last">
              <div className="relative aspect-square w-40 md:w-full rounded-xl border border-border overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Rishab Vempati"
                  fill
                  sizes="(max-width: 768px) 160px, 240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* News */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-foreground mb-3">News</h2>
            <ul className="space-y-2">
              {news.map((item) => (
                <li
                  key={item.date}
                  className="flex flex-col sm:flex-row sm:gap-4 text-sm"
                >
                  <span className="text-muted shrink-0 sm:w-24 tabular-nums">
                    {item.date}
                  </span>
                  <span className="text-foreground/90">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            number="01"
            title="Research"
            subtitle="Agentic systems, reinforcement learning for LLMs, and information retrieval."
          />

          <div className="space-y-10">
            {/* CIDER Lab */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  uxCUA — Computer-Use Agents for UI Usability
                </h3>
                <span className="text-sm text-muted">Feb 2026 – Aug 2026</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="text-muted">
                  CIDER Lab, Purdue · Advised by Prof. Jason Wu
                </span>
                <span className="px-2 py-0.5 rounded-md border border-accent/40 text-accent text-xs">
                  Under review · ACM UIST 2026
                </span>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-sm text-muted marker:text-border">
                <li>
                  Training a computer-use agent for automated UI usability
                  assessment via RL-based fine-tuning of vision-language models
                  on 879 interactive websites with injected usability defects.
                </li>
                <li>
                  Running large-scale agent rollout generation and evaluation on
                  NVIDIA H100 GPU clusters.
                </li>
                <li>
                  Designing navigation quality heuristics and reward functions
                  to improve agent exploration behavior.
                </li>
              </ul>
            </div>

            {/* Cisco research */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  Probabilistic Demand Forecasting
                </h3>
                <span className="text-sm text-muted">Jan 2024 – May 2024</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="text-muted">
                  Undergraduate Researcher · Cisco
                </span>
                <a
                  href="/poster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 rounded-md border border-border text-muted text-xs hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  Poster
                </a>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-sm text-muted marker:text-border">
                <li>
                  Developed MLE and Bayesian inference algorithms to select
                  optimal forecasting models across 10K+ product SKUs.
                </li>
                <li>
                  Built outlier detection and clustering pipelines (Isolation
                  Forest, GMMs), improving forecast accuracy by 3%.
                </li>
              </ul>
            </div>

            {/* OSM Project */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  Parking Lot Detection &amp; Mapping
                </h3>
                <span className="text-sm text-muted">2024</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="text-muted">
                  The Data Mine, Purdue University
                </span>
                <a
                  href="https://github.com/rvempat/TDM_111-OSM-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 rounded-md border border-border text-muted text-xs hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  Code
                </a>
              </div>
              <ul className="list-disc ml-4 space-y-2 text-sm text-muted marker:text-border">
                <li>
                  Led a 5-person team building a U-Net segmentation model for
                  satellite imagery, achieving 84% IoU accuracy.
                </li>
                <li>
                  Built an automated pipeline ingesting 50GB+ of Bing Maps
                  imagery and containerized the training workflow with Docker.
                </li>
                <li>
                  Contributed 5,000+ validated parking-lot annotations to
                  OpenStreetMap for open-source urban mapping.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading number="02" title="Publications" />
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="text-sm text-muted tabular-nums pt-0.5">
                [1]
              </span>
              <div>
                <p className="text-foreground font-medium">
                  Training Computer Use Agents to Assess the Usability of
                  Graphical User Interfaces
                </p>
                <p className="text-sm text-muted">
                  Alice Gao, Weixi Tong,{" "}
                  <span className="text-foreground">Rishab Vempati</span>,
                  Katharina Reinecke, R. Benjamin Shapiro, Tianyi Zhang, Jason
                  Wu.
                </p>
                <p className="text-sm text-muted">
                  Under review at ACM UIST 2026.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-sm text-muted tabular-nums pt-0.5">
                [2]
              </span>
              <div>
                <p className="text-foreground font-medium">
                  Enhancing Ensemble Algorithm &amp; Calibration Process for
                  Demand Forecasting
                </p>
                <p className="text-sm text-muted">
                  Aman Kumar, Arhan Chaudhary, Kapil Naresh,{" "}
                  <span className="text-foreground">Rishab Vempati</span>, Sahil
                  Desai, Shreya Gupta, Siddh Patani, Siddharth Sancheti, Zachary
                  Kirkeby.
                </p>
                <p className="text-sm text-muted">
                  The Data Mine, Purdue University, 2024.{" "}
                  <a
                    href="/poster.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    [poster]
                  </a>
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            number="03"
            title="Experience"
            subtitle="Engineering roles building production AI and distributed systems."
          />
          <div>
            {experience.map((job) => (
              <div
                key={job.org}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 border-b border-border last:border-0"
              >
                <div>
                  <h3 className="font-medium text-foreground">
                    {job.role}{" "}
                    <span className="text-muted font-normal">· {job.org}</span>
                  </h3>
                  <p className="text-sm text-muted">{job.note}</p>
                </div>
                <div className="text-sm text-muted sm:text-right shrink-0">
                  <div>{job.when}</div>
                  <div>{job.where}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 border-t border-border text-center"
      >
        <div className="container mx-auto px-6 max-w-2xl">
          <SectionHeading number="04" title="Get In Touch" />
          <p className="text-muted mb-8">
            I&apos;m open to connecting about research collaborations, graduate
            school, or interesting problems in agentic AI.
          </p>
          <a
            href="mailto:rishabvempati.2004@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" /> Say Hello
          </a>

          <div className="mt-16 flex justify-center gap-6">
            <a
              href="https://github.com/rvempati24"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rvempat"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <footer className="mt-12 text-sm text-muted">
            <p>Designed &amp; Built by Rishab Vempati</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
