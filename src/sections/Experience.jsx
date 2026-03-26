import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");

    // Workshop photo reveal
    gsap.utils.toArray(".workshop-photo").forEach((photo, i) => {
      gsap.fromTo(
        photo,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: photo,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop Gallery */}
        <div className="mt-32">
          <TitleHeader
            title="Workshops & Speaking Events"
            sub="🎤 Sharing Knowledge, Building Community"
          />
          <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="workshop-photo rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/images/workshop1.jpg"
                alt="Ethical Hacking Workshop - Madukkarai, Tamil Nadu"
                className="w-full object-cover"
              />
              <div className="p-4 bg-black/40 backdrop-blur-sm">
                <p className="text-white font-semibold">Ethical Hacking Workshop</p>
                <p className="text-white-50 text-sm mt-1">Madukkarai, Tamil Nadu, India – Jan 2026</p>
              </div>
            </div>
            <div className="workshop-photo rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/images/workshop2.jpg"
                alt="Full-Stack and Security Training - Madukkarai, Tamil Nadu"
                className="w-full object-cover"
              />
              <div className="p-4 bg-black/40 backdrop-blur-sm">
                <p className="text-white font-semibold">Full-Stack & Security Training</p>
                <p className="text-white-50 text-sm mt-1">Madukkarai, Tamil Nadu, India – Jan 2026</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
