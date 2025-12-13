// homepage for the site

import Hero from '../components/home/hero';
import FeaturedProjects from '../components/home/featuredProjects'
import About from '../components/home/about';

export default function HomePage() {
  return (
    <div className="bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark">
      <Hero />
      <About/>
      <FeaturedProjects />
    </div>
  );
}
