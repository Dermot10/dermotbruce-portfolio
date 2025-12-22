'use client';

import { FaCode, FaCloud, FaBrain } from 'react-icons/fa';

export default function AboutPage() {
  const skills = ["Go", "Next.js / React", "Python", "PostgreSQL", "AI / Automation"];

  return (
    <section className="py-16 bg-[#161B22] text-[#C9D1D9] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] text-center">
          About Me
        </h1>

        {/* Intro Panel */}
        <div className="bg-[#161B22]/80 p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 text-justify leading-relaxed">
            <p className="mb-4">
              I’m a software engineer with a strong backend foundation, cloud experience, and a growing focus on AI engineering. I design and deliver production-ready systems that are reliable, scalable, and aligned with real business needs.
            </p>
            <p className="mb-4">
              My work spans microservices in <span className="text-accent">Go</span>, automation pipelines in <span className="text-accent">Python</span>, and SaaS-ready frontends in <span className="text-accent">Next.js</span>. I prioritize clean, maintainable architecture and measurable impact.
            </p>
          </div>

          {/* Optional Image / Illustration */}
          <div className="md:w-1/3 flex justify-center items-start">
            {/* Placeholder for profile or abstract graphic */}
            <div className="w-40 h-40 bg-[#0F1115] rounded-xl shadow-lg flex items-center justify-center text-[#3B82F6] font-bold">
              Me
            </div>
          </div>
        </div>

        {/* Skills / Expertise */}
        <div className="bg-[#161B22]/70 p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-6">Technical Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full border border-[#30363D] bg-[#161B22] text-[#3B82F6] font-medium hover:bg-[#3B82F6]/10 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Philosophy / Approach */}
        <div className="bg-[#161B22]/80 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-4 text-center">Approach & Philosophy</h2>
          <p className="mb-4 leading-relaxed">
            I take a product-first approach, building systems that solve real problems. From detection-as-code frameworks to AI-powered automation, I design with operational efficiency, scalability, and maintainability in mind.
          </p>
          <p className="leading-relaxed">
            Beyond delivery, I value clean architecture, observability, and systems that engineers can easily understand and extend. Exploring AI, cloud, and automation responsibly while keeping reliability front and center is key.
          </p>
        </div>

        {/* Future Goals */}
        <div className="bg-[#161B22]/70 p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-4">Looking Ahead</h2>
          <p className="leading-relaxed">
            I’m focused on building SaaS products, expanding in AI engineering, and delivering high-impact systems that tackle growing technical and business challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
