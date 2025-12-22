'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    // Animate text
   const ctx = gsap.context(() => {
      gsap.from(".about-item", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 1.0,
      ease: "power3.out",
    });

    // Animate image 
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 50, 
        duration: 1,
        ease: "power3.out",
      });
    }
  }, aboutRef);

  return () => {
      ctx.revert(); 
    };
  }, []);

  return (
    <section ref={aboutRef} className="pt-40 pb-28 md:pt-48 md:pb-32 about-section">
      <div className="mx-auto max-w-3xl flex flex-col md:flex-row items-center gap-8 px-4">

        <div className="md:w-1/2 text-text text-center md:text-left">
          <h2 className="text-3xl font-semibold text-center mb-6">About</h2>
          <p className="about-item leading-relaxed text-muted-foreground mb-4">
            I’m Dermot, a software engineer with 4 years of experience building
            clean, scalable, and reliable systems.
          </p>
          <p className="about-item leading-relaxed text-muted-foreground mb-4">
            My background is rooted in backend engineering, with a focus on delivering
            performant and maintainable solutions. AI engineering has become a particular point of interest to me,
            integrating generative capabilities into applications both professionally and personally.
          </p>
          <ul className="about-item text-sm text-center mt-4">
            <li>Go</li>
            <li>Next.js / React</li>
            <li>Python</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div
          ref={imageRef}
          className="md:w-1/2 flex justify-center md:justify-end -mt-8 md:-mt-12"
        >
          <Image
            src="/profile-pic.jpg"
            alt="Dermot Bruce"
            width={320}
            height={320}
            className="rounded-lg shadow-lg"
            />
        </div>
      </div>
    </section>
  );
}

