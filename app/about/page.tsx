'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

      // cleanup
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, []);



  const skills = ["Python", "Go", "SQL",
    "Linux","AWS", "Azure","Docker" ,"Kubernetes","RabbitMQ", 
    "FastAPI", "Django", "React", "Next.js",
    "Gen AI", "Langchain", "Scikit-learn", "Pandas", "Numpy", "Matplotlib",
    "Playwright", "Postman", 
    "Tines",  "Splunk", 
  ];


 
  return (
    <section className="py-16 bg-[#161B22] text-[#C9D1D9] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#E5E7EB] text-center">
          About Me
        </h1>

        {/* Intro Panel */}
        <div className="about-box bg-[#161B22]/80 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div className="md:w-2/3 text-justify leading-relaxed">
            <p className="mb-4">
              I’m a software engineer with strong backend engineering and cloud experience, with an ever-growing focus on AI and how it can be applied to various use-cases safely.
              My work spans high-throughput microservices in <span className="text-[#3B82F6]">Go</span>, production-ready APIs in <span className="text-[#3B82F6]">Python</span>, and the orchestration of security and operational workflows with both code and low-code solutions. 
              I build systems that are reliable, maintainable, and aligned with real-world business needs.
            </p>
            <p className="mb-4">
              I approach engineering with a <span className="text-[#3B82F6]">product-first</span> mindset: starting from user requirements, working backward to technical constraints, and designing solutions with both functional and non-functional requirements in mind. Prior to coding I focus on <span className="text-[#3B82F6]">clean architecture, observability, and scalable patterns</span>, ensuring that systems are easy to understand, extend, and maintain for the teams I work with.
            </p>
            <p className="leading-relaxed">
              Outside of work, I enjoy a variety of hobbies, from gaming and reading to following football. I frequently go to the gym and for walks believing a healthy body fosters a healthy mind, which in turn strengthens the quality of my work.   
              I’m also <span className="text-[#3B82F6]">passionate</span> about meeting new people and learning from different perspectives. While networking can sometimes feel unnatural, I genuinely enjoy the opportunity to connect and exchange ideas with others.
            </p>
          </div>

          {/* Profile pic next to intro */}
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

        {/* Skills / Expertise */}
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

        {/* Approach & Philosophy */}
        <div className="about-box bg-[#161B22]/80 p-8 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-4">Approach & Philosophy</h2>
          <p className="mb-4 leading-relaxed">
            I began as a backend developer driven by a desire to build intelligent, high-impact systems. While I take pride in well-executed solutions, I have come to value simplicity, scalability, and clarity above all. 
            Over time, I’ve developed a mental framework that guides my work: a product-first approach that starts with user needs, works backward to technical constraints, and constructs code from the desired output to the inputs. This approach ensures solutions are robust, maintainable, and aligned with real-world impact.
          </p>
        </div>

        {/* Looking Ahead */}
        <div className="about-box bg-[#161B22]/70 p-8 rounded-xl shadow-md text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-4">Looking Ahead</h2>
          <p className="leading-relaxed">
            I’m focused on building <span className="text-[#3B82F6]">SaaS</span> products, expanding in <span className="text-[#3B82F6]">AI engineering</span>, and continually delivering high-impact systems that tackle growing technical and business challenges.
          </p>
        </div>

      </div>
    </section>
  );
}