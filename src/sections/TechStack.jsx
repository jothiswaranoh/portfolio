import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { newSkillsData } from "../constants/newPortfolioData";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.05, // Faster stagger since we now have 15 items
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-0">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* Replaced .tech-grid with standard custom grid to reduce massively oversized xl:h-[50vh] wrappers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-16 px-5 md:px-0">

          {newSkillsData.map((skill, index) => (
            <div
              key={index}
              className="tech-card relative overflow-hidden group rounded-2xl border border-white/10 bg-[#0a0f1c] hover:border-white/30 transition-all duration-300"
            >
              {/* old UI's animated slide background effect adapted for smaller cards */}
              <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#1e293b] group-hover:bottom-0 transition-all duration-500 z-0 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center p-6 lg:p-8 gap-4 cursor-pointer">
                {/* 2D Icon Wrapper */}
                <div className="p-4 rounded-xl bg-black/40 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="w-full">
                  <p className="text-center font-medium md:text-base text-sm text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TechStack;
