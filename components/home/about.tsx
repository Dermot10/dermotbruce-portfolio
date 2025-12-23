'use client';

import { useState } from "react";

const capabilities = [
  {
    title: "Communication & Collaboration",
    description: `Clearly articulating complex technical concepts to both technical and non-technical stakeholders.\n
      Leading discussions, demos, and design conversations that align engineering decisions with business objectives.\n
      Fostering strong cross-team collaboration by bridging product, engineering, and operational perspectives to drive outcomes, not just delivery.`,
  },
  {
    title: "Backend Development",
    description: `4 years of experience designing and delivering scalable, maintainable backend systems in Go and Python.\n
      Architectural demands have ranged from monoliths to microservices, covering automations and platform integrations.\n
      Systems are designed with stakeholder experience in mind while meeting clear technical and operational requirements.`,
  },
  {
    title: "Cloud Architecture",
    description: `Designing and delivering end-to-end cloud solutions across AWS and Azure.\n
      Owning core platform concerns including authentication, observability, CI/CD pipelines, versioning strategies, and background processing.\n
      Hands-on experience deploying and operating workloads using Kubernetes, with a strong focus on reliability, scalability, and real-world business impact.`,

  },
  {
    title: "AI Integrations",
    description: `Integrating AI/ML capabilities into applications to enhance core intelligence and user experience. \n
      Taking a pragmatic, engineering-led approach to AI with a clear understanding of current capabilities, limitations, and trade-offs.\n
      Hands-on experience with rudimentary model training and optimisation, applied to practical use cases such as RAG-based applications or recommendations and classification features.`,
  },
  {
    title: "Product Thinking",
    description: `Applying a product-first mindset to engineering decisions by balancing technical excellence with user impact and business value.\n
      Incorporating iterative feedback, data, and real-world usage to inform trade-offs and prioritisation.\n
      Measuring success through outcomes and adoption, not just technical delivery, to ensure solutions meaningfully serve users and stakeholders.`,
  },
  {
    title: "Cyber Security",
    description: `Designing and building detection-as-code frameworks, threat intelligence integrations, and security automation workflows using Python and low-code platforms.\n
      Driving operational efficiency and risk reduction by integrating security tooling, enriching telemetry, and standardising detection logic through version-controlled practices.\n
      Delivering meaningful visibility through metrics, reporting, and executive-facing insights, while embedding automation and guardrails to support secure, scalable blue-team operations.`,
  },
  {
    title: "Frontend Development",
    description: `An actively developing skillset, focused on crafting performant, user-centric interfaces using Next.js, React and by extension Typescript.\n
      Applying strong engineering fundamentals to frontend development to support cohesive, end-to-end product experiences.\n
      This site itself was designed and built using Next.js and TypeScript, reflecting a hands-on, learn-by-building approach.`,
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
              <p className="text-[#C9D1D9] whitespace-pre-line">{capabilities[active].description}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
