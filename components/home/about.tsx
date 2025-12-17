'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function About(){
    const aboutRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (!aboutRef.current) return;

        gsap.from(".about-item", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        });
    }, []);


    return (
        <section ref={aboutRef} className="py-12 about-section">
            <div className="mx-auto max-w-prose text-center">
                <h2 className="text-3xl font-semibold mb-6">About</h2>
                <p className="about-item">
                    I’m Dermot, a software engineer with 4 years of experience building
                    clean, scalable, and reliable systems.
                </p>

                <p className="mt-4 about-item">
                    My background is rooted in backend engineering, with a focus on delivering
                    performant and maintainable solutions. AI engineering has become a particular point of interest to me,
                    integrating generative capabilities into applications both professionally and personally.
                </p>

                <p className="mt-4 about-item">
                    Over this coming year, I’m intentionally expanding into SaaS development,
                    aiming to build and ship complete, production-ready products end-to-end.
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm about-item">
                    <li>Go</li>
                    <li>Next.js / React</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
        </section>
    );
}
