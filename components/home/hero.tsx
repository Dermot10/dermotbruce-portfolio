'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const h1Words = heroRef.current!.querySelectorAll(".hero-title span");
      const paragraph = heroRef.current!.querySelector("p");
      const buttons = heroRef.current!.querySelectorAll("a");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.from(h1Words, { opacity: 0, y: 20, stagger: 0.1, duration: 1 })
        .from(paragraph, { opacity: 0, y: 16, duration: 0.5 }, "-=0.2")
        .from(buttons, { opacity: 0, y: 10, stagger: 0.1, duration: 0.8 }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
        ref={heroRef}
        className="bg-surface text-text text-center py-24 px-6 transition-colors duration-300"
        // style={{
        //   backgroundImage: "url(/blue-purple-main.jpg)",
        //   backgroundSize: "cover", 
        //   backgroundPosition: "center",
        // }}
      >
    
      <h1 className="text-5xl font-bold mb-4 hero-title">
        <span className="inline-block">Dermot</span>{" "}
        <span className="inline-block">Bruce-Agbeko</span>
      </h1>
      <p className="text-xl mb-8" style={{ color: '#9CA3AF' }}>Building scalable software</p>
      <div className="flex justify-center gap-4">
        {/* Outline button */}
        <a
          href="/projects"
          className="px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border-2 border-accent text-accent hover:bg-accentHover hover:text-surface"
          style={{ borderColor: '#3B82F6', color: '#3B82F6' }} // fallback
        >
          View Projects
        </a>
        {/* Filled button */}
        <a
          href="/contact"
          className="px-6 py-3 rounded-lg font-semibold transition-colors duration-200 bg-accent text-surface hover:bg-accentHover"
          style={{ backgroundColor: '#3B82F6', color: '#0F1115' }} // fallback
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
