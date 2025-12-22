// homepage for the site

import Hero from '../components/home/hero';
import FeaturedProjects from '../components/home/featured-projects'
import About from '../components/home/about';
import ExperienceTimelinePage from '@/components/home/experience-timeline';

export default function HomePage() {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/blue-purple-main.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
          <Hero />
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <About />
        <ExperienceTimelinePage />
        
      </main>
      <FeaturedProjects />
    </>
  );
}
