'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    useEffect(() => {
      const boxes = document.querySelectorAll<HTMLElement>('.about-box');

      boxes.forEach((box) => {
        gsap.set(box, { opacity: 0, y: 50 });

        gsap.to(box, {
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        });
      });
      
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, []);



  const skills = ["Python", "Go", "SQL",
    "Cyber Security", "Linux", "AWS", "Azure", 
    "Docker", "Kubernetes", "RabbitMQ", 
    "FastAPI", "Django", "React", "Next.js",
    "Gen AI", "Langchain", "Pandas", "Numpy", "Matplotlib", 
    "Postman", "Tines",  "Splunk", 
  ];


 
  return (
    <section className="py-16 bg-[#161B22] text-[#C9D1D9] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB]">
            About Me
          </h1>
          <p className="mt-4 text-lg text-[#9CA3AF]">
            Independent Software Engineer
          </p>
        </div>

        {/* Intro Panel */}
        <div className="about-box bg-[#161B22]/80 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="md:w-2/3 text-justify leading-relaxed">
            <p className="mb-4">
              I design and build software systems, tools, and platforms with a focus on reliability, scalability, and real-world impact. My work spans high-throughput systems in <span className="text-[#3B82F6]">Go</span>, production-grade APIs in <span className="text-[#3B82F6]">Python</span>, and the automation of security and operational workflows in both traditional code and low-code solutions.
            </p>

            <p className="mb-4">
              I operate with a <span className="text-[#3B82F6]">product-first</span> mindset—starting from the problem space, defining the desired outcome, and working backward to engineer systems that are both effective and maintainable. This includes designing clean architectures, embedding observability from the outset, and ensuring solutions scale alongside business and technical growth.
            </p>

            <p className="leading-relaxed">
              Increasingly, my focus is on building <span className="text-[#3B82F6]">tools, internal platforms, and standalone products</span>, as well as working independently with teams to deliver high-impact systems. I value clarity, ownership, and delivering outcomes.
            </p>
          </div>

          {/* Profile pic */}
          <div className="md:w-1/3 flex justify-center items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <Image
              src="/linkedin-profile-pic-bw.jpeg"
              alt="Dermot Bruce"
              width={300}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Ways I Work */}
        <div className="about-box bg-[#161B22]/70 p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-6">Ways I Work</h2>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p>• Engineering than encompasses varying backend systems, APIs, security and cloud infrastructure</p>
            <p>• Building internal tools and platforms to improve business productivity and operations, specialising in cybersecurity</p>
            <p>• Automation and AI integrations to optimise existing systems and workflows</p>
            <p>• End-to-end product development, from concept through to production</p>
          </div>
          <p className="mt-6 text-[#9CA3AF]">
            I’m comfortable operating independently or embedding within teams, with a focus on delivering outcomes rather than just code.
          </p>
        </div>

        {/* Skills */}
        <div className="about-box bg-[#161B22]/70 p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
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

        {/* How I Work */}
        <div className="about-box bg-[#161B22]/80 p-8 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-4">How I Work</h2>
          <p className="mb-4 leading-relaxed">
            My approach is grounded in clarity, simplicity, and delivery. I start with the problem and the desired outcome, then design systems that meet both functional and operational requirements.
          </p>
          <p className="leading-relaxed">
            I prioritise clean architecture, strong observability, and scalable patterns—ensuring systems are not only effective today but maintainable over time. I favour pragmatic decisions over unnecessary complexity and build with the expectation that systems will evolve.
          </p>
        </div>

        {/* Current Focus */}
        <div className="about-box bg-[#161B22]/70 p-8 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-4">Current Focus</h2>
          <p className="leading-relaxed">
            <p className="leading-relaxed">
              I build software, tools, and business-critical platforms, and work with teams to solve high-impact technical problems. My focus is on systems at the intersection of backend engineering, automation, and scalable intelligent workflows.
            </p>
          </p>
        </div>

      </div>
    </section>
  );
}