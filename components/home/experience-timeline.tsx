'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    role: 'Software Engineer',
    company: 'Freelance',
    period: '2025 - ',
    description:
      ` • Operated as a full-stack engineer, designing and developing MVP for Saas product.`
    
  },
  {
    role: 'Software Engineer',
    company: 'Portman Dentex',
    period: '2025',
    description:
      ` • Developed production-grade backend services in Go.
        • Built internal tools for observability and automation in Python.
        • Operated in cross-functional team with peers from both the data and finance teams respectively.`
  },
  {
    role: 'Software Developer / Automation Engineer',
    company: 'Holland & Barrett',
    period: '2023 – 2024',
    description:
      ` • Automated internal processes for cybersecurity team, using both Python and low-code solution Tines.
            > Built integrations between third-party solutions and SIEM platform.
            > Architecting the migration of the existing detection model
            > Configured threat intelligence feeds
            > Reporting and metrics for c-suite executives 
        • Chaired automation demos for the cybersecurity team.
        • Organised team event days.
        • Hosted build sessions within the team to bolster knowledge sharing and collaboration.`
  },
  {
    role: 'Software Developer',
    company: 'Essential Net',
    period: '2021 – 2023',
    description: 
      ` • Developed scalable APIs using Django REST Framework (DRF). 
        • Developed core back-end business logic to power critical application features for partners with a quarter of a million users.
        • Improved testing, enhancing sandbox environments to better replicate large production conditions.
        • Configured and maintained virtual machine builds for customers.`

  
  },
];


export default function ExperienceTimelinePage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards
      gsap.from('.timeline-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Animate nodes slightly after
      gsap.from('.timeline-node', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-16">Experience</h2>

      <div className="relative">
        {/* Vertical line from first to last node */}
        <div className="absolute left-1/2 top-6 bottom-6 w-1 bg-[#3B82F6] transform -translate-x-1/2 z-0 pointer-events-none" />

        <ul className="relative z-10">
          {experience.map((item, idx) => (
            <li
              key={idx}
              className="timeline-card relative flex flex-col md:flex-row items-start md:items-center mb-24"
            >
              {/* Node */}
              <span style={{ backgroundColor: '#3B82F6', boxShadow: '0 0 0 2px #2A2A2A'  }} className="timeline-node absolute left-1/2 top-6 transform -translate-x-1/2 h-5 w-5 rounded-full bg-[#3b82f6] ring-2 ring-border z-10 shadow-md"></span>

              {/* Card */}
            <div
              className={`bg-surface p-6 rounded-xl shadow-lg dark:shadow-black/40 md:w-1/2 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 ${
                idx % 2 === 0 ? 'md:mr-auto md:text-left' : 'md:ml-auto md:text-right'
              }`}
            >
              <h3 className="font-semibold text-xl text-accent">
                {item.role}
                <span style={{color: '#3B82F6'}} className="text-muted text-sm ml-2">· {item.company}</span>
              </h3>
              <p className="text-sm text-muted mt-1">{item.period}</p>

              {/* Description with optional nested bullets */}
              <div className="mt-4 text-text leading-relaxed">
                {idx === 2 ? (
                  // Special case for H&B with nested points
                  <ul className="list-disc ml-5 space-y-2">
                    <li>
                      Automated internal processes for cybersecurity team, using both Python and low-code solution Tines.
                      <ul className="list-disc ml-6 mt-1 space-y-1">
                        <li>Built integrations between third-party solutions and SIEM platform.</li>
                        <li>Architecting the migration of the existing detection model</li>
                        <li>Configured threat intelligence feeds</li>
                        <li>Reporting and metrics for c-suite executives</li>
                      </ul>
                    </li>
                    <li>Chaired automation demos for the cybersecurity team.</li>
                    <li>Organised team event days.</li>
                    <li>Hosted build sessions within the team to bolster knowledge sharing and collaboration.</li>
                  </ul>
                ) : (
                  <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                )}
              </div>
            </div>

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
