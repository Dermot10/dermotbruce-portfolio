'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import splitText from "../shared/funcs"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const h1Words = heroRef.current.querySelectorAll(".hero-title span");
    const paragraph = heroRef.current.querySelector("p");
    const buttons = heroRef.current.querySelectorAll("a");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.2 });

    tl.from(h1Words, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 1.0,
    })
    .from(paragraph, {
      opacity: 0,
      y: 16,
      duration: 0.5,
    }, "-=0.2")
    .from(buttons, {
      opacity: 0,
      y: 10,
      stagger: 0.15,
      duration: 0.8,
    }, "-=0.3");
  }, []);

  return (
    <section ref={heroRef} className="text-center py-24">
      <h1 className="text-5xl font-bold mb-4 hero-title">
        <span className="inline-block">Dermot</span>{" "}
        <span className="inline-block">Bruce-Agbeko</span>
      </h1>
      <p className="text-xl mb-8">Building scalable software</p>
      <div className="flex justify-center gap-4">
        <a href="/projects" className="px-6 py-3 border border-accent rounded-lg">View Projects</a>
        <a href="/contact" className="px-6 py-3 border border-accent rounded-lg">Contact Me</a>
      </div>
    </section>
  );
}
