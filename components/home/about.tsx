'use client';

import { useState } from "react";

const capabilities = [
  {
    title: "Backend Development",
    description:
      "4 years of experience designing and delivering scalable, maintainable systems in Go and Python, enabling teams to rely on stable, high-throughput services.",
  },
  {
    title: "Cloud Architecture",
    description:
      "Designing end-to-end cloud solutions in AWS and Azure, handling authentication, observability, deployment pipelines, and background processing for real-world business impact.",
  },
  {
    title: "AI Integrations",
    description:
      "Integrating AI/ML into applications driving the application's intelligence, especially in automative processes. I take a pragmatic approach to AI developed understanding the current capabities, limitations and boundaries of the technology.",
  },
  {
    title: "Cyber Security",
    description:
      "Building detection-as-code frameworks, threat intelligence feeds, and automation workflows in both python and low-code that reduce operational risk while increasing visibility for decision-makers.",
  },
  {
    title: "Frontend Development",
    description:
      "Crafting performant, user-centric interfaces in Next.js and React to complement end-to-end engineering solutions and product experiences.",
  },
  {
    title: "Communication & Collaboration",
    description:
      "Effectively articulating technical solutions, presenting sprint demos, and collaborating across teams to align engineering outcomes with business goals.",
  },
  {
    title: "Product Thinking",
    description:
      "Applying a growing product-first mindset to engineering decisions, prioritizing user impact, iterative feedback, and measurable success over purely technical metrics.",
  },
];


export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-48 px-6 bg-[#161B22] text-[#C9D1D9]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-12">

        <div className="md:w-3/5 p-2 flex flex-col gap-4">
          <h3 className="text-xl font-medium mb-4 text-[#E5E7EB] text-center">Engineering Snapshot</h3>

          {/* Row with buttons and description */}
          <div className="flex flex-col md:flex-row gap-16 md:ml-[-5rem]">
            {/* Titles list */}
            <div className="flex flex-col gap-3 md:flex-[1]">
              {capabilities.map((cap, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setActive(idx)}
                  className={`text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                    idx === active
                      ? "bg-[#3B82F6]/20 text-[#3B82F6]"
                      : "hover:bg-[#3B82F6]/10"
                  }`}
                >
                  {cap.title}
                </button>
              ))}
            </div>

            {/* Description panel */}
            <div className="md:flex-[2] p-3 rounded-lg min-h-[120px]">
              <p className="text-[#C9D1D9]">{capabilities[active].description}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
