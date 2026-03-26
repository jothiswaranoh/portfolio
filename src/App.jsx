import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import LinkedInFeed from "./sections/LinkedInFeed";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useLayoutEffect(() => {
    // Elegant reveal on scroll for all sections
    const sections = gsap.utils.toArray("section");
    sections.forEach((section) => {
      // Don't apply default scroll trigger for Hero as it's the first section
      // and we want it to animate on load, not wait for scroll.
      if (section.id === "hero" || section.classList.contains("hero")) return;

      gsap.fromTo(section,
        { autoAlpha: 0, y: 80, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <Hero id="hero" className="hero" />
        <ShowcaseSection />
        <LogoShowcase />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Testimonials />
        <LinkedInFeed />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
