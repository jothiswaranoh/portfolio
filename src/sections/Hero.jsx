import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ id, className }) => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Load Entry Animation (Apple style slow fade in)
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.1, filter: "blur(5px)" },
        { scale: 1, filter: "blur(0px)", duration: 2.5, ease: "power3.out" }
      );

      gsap.fromTo(
        textRef.current.children,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.4 }
      );

      // 2. Parallax and Fade out on Scroll Down (Tesla/Apple aesthetic)
      gsap.to(".hero-bg", {
        yPercent: 40,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(textRef.current, {
        yPercent: 50,
        autoAlpha: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id || "hero"}
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className || ""}`}
    >
      {/* Background Image with animated class */}
      <div
        className="hero-bg absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/jothis-pro.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "30% 25%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div ref={textRef} className="relative z-20 text-center text-white px-6 w-full max-w-5xl">
        <h1 className="text-[80px] sm:text-[100px] md:text-[130px] font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-gray-500 drop-shadow-2xl leading-none">
          Jothiswaran R
        </h1>

        <div className="mt-8 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-gray-200 tracking-wide">
            Software Developer <span className="text-blue-400">@ Hash Agile</span>
          </p>
          <div className="h-[1px] w-24 bg-gray-600 mx-auto my-6"></div>
          <p className="text-lg md:text-xl font-light opacity-80 tracking-[0.2em] mt-3 uppercase text-gray-300">
            App Developer &bull; VAPT Specialist &bull; Ethical Hacker
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;