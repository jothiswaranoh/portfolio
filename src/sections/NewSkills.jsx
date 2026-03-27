import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { topSkills, newSkillsData } from '../constants/newPortfolioData';

gsap.registerPlugin(ScrollTrigger);

const NewSkills = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Semicircles slide down
        gsap.fromTo(
            ".top-skill-arc",
            { y: -50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".skills-header",
                    start: "top 90%",
                },
            }
        );

        // Skill cards fade up
        gsap.fromTo(
            ".skill-card",
            { y: 50, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 0.6,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: ".skills-grid",
                    start: "top 85%",
                },
            }
        );
    }, { scope: container });

    return (
        <section id="skills" className="relative pb-20 pt-32 lg:pt-40 min-h-screen w-full flex flex-col items-center overflow-hidden" ref={container}>

            {/* Top divider to ensure they hang off a solid line */}
            <div className="w-full h-[1px] bg-white/10" />

            {/* Top Semi-circles row */}
            <div className="skills-header w-full flex justify-center mb-16 px-5 lg:px-20 z-20">
                {/* Mobile flat badges */}
                <div className="lg:hidden flex flex-wrap justify-center gap-3 w-full mt-10">
                    {topSkills.map((skill) => (
                        <span key={skill.id} className="top-skill-arc px-4 py-2 bg-[#0a0f1c] border border-white/10 shadow-lg rounded-full text-white font-semibold text-sm">
                            {skill.name}
                        </span>
                    ))}
                </div>

                {/* Desktop Semi-circles strictly attached to the top line */}
                <div className="hidden lg:flex justify-between w-full max-w-7xl">
                    {topSkills.map((skill) => (
                        <div
                            key={skill.id}
                            className="top-skill-arc relative w-[180px] h-[90px] xl:w-[220px] xl:h-[110px] bg-[#0a0f1c] rounded-b-[110px] border-b border-x border-white/10 flex flex-col items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                        >
                            <div className="absolute inset-0 rounded-b-[110px] bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
                            <h3 className="text-white text-sm xl:text-base font-bold text-center px-4 mb-2 z-10 leading-snug">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl w-full mx-auto px-5 relative z-10 mt-10">
                {/* Subtitle */}
                <div className="text-center mb-16">
                    <p className="text-slate-400 italic text-sm md:text-md tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-80">
                        Full Stack • AI/ML • Cloud & DevOps • Mobile
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 mt-10">
                    {newSkillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl"
                        >
                            {/* background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="z-10 bg-[#020617] p-4 rounded-xl border border-white/5 ring-1 ring-white/10 group-hover:ring-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                                {skill.icon}
                            </div>
                            <h4 className="text-white font-medium text-sm lg:text-base z-10 text-center">{skill.name}</h4>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NewSkills;
