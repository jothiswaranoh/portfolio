import React, { useRef } from 'react';
import { Calendar } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { newExperienceData } from '../constants/newPortfolioData';

gsap.registerPlugin(ScrollTrigger);

const NewExperience = () => {
    const container = useRef(null);

    useGSAP(() => {
        // vertical line growth
        gsap.fromTo(
            ".timeline-line",
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".timeline-wrapper",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: true,
                },
            }
        );

        // Cards fade in
        gsap.utils.toArray('.timeline-item').forEach((item, i) => {
            const isLeft = i % 2 === 0;
            gsap.fromTo(
                item.querySelector('.timeline-card'),
                { opacity: 0, x: isLeft ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                }
            );
        });

        // Bubbles fade in
        gsap.utils.toArray('.timeline-circle').forEach((circle) => {
            gsap.fromTo(
                circle,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: circle,
                        start: "top 85%",
                    },
                }
            );
        });
    }, { scope: container });

    return (
        <section id="experience" className="relative py-20 overflow-hidden w-full flex-center" ref={container}>
            <div className="max-w-7xl w-full mx-auto px-5 relative z-10 flex flex-col items-center">

                {/* Timeline wrapper */}
                <div className="relative mt-20 flex flex-col items-center w-full timeline-wrapper">

                    {/* Vertical middle line */}
                    <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-slate-800 rounded-full">
                        <div className="timeline-line w-full h-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-cyan-400 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                    </div>

                    <div className="flex flex-col w-full gap-8 md:gap-14">
                        {newExperienceData.map((exp, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={exp.id} className="timeline-item flex relative items-center justify-between w-full min-h-[80px]">

                                    {/* Left Side (Empty on mobile, alternating on desktop) */}
                                    <div className={`w-0 md:w-[45%] flex ${!isLeft ? 'justify-end invisible' : 'justify-end'}`}>
                                        {isLeft && (
                                            <div
                                                className="timeline-card bg-[#0b0f19] border border-white/5 rounded-2xl p-5 w-full md:w-[90%] relative hidden md:block hover:-translate-y-1 transition-transform duration-300"
                                            >
                                                <div
                                                    className="absolute top-0 left-0 w-full h-[2px] rounded-t-2xl"
                                                    style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
                                                />

                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="p-3 rounded-lg bg-black border border-white/10"
                                                        style={{ boxShadow: `0 0 10px ${exp.color}30` }}
                                                    >
                                                        {exp.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-base xl:text-lg">{exp.title}</h3>
                                                        <div className="flex items-center gap-2 mt-2 text-slate-400 text-xs xl:text-sm font-mono">
                                                            <Calendar size={14} />
                                                            <span>{exp.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Center Circle */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2">
                                        <div
                                            className="timeline-circle z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-900 text-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] border-[3px] border-[#020617]"
                                            style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}80` }}
                                        >
                                            {exp.id.toString().padStart(2, '0')}
                                        </div>
                                    </div>

                                    {/* Right Side (Active on mobile, alternating on desktop) */}
                                    <div className={`w-full pl-[60px] md:pl-0 md:w-[45%] flex ${isLeft ? 'justify-start md:invisible' : 'justify-start'}`}>
                                        {(!isLeft || true) && ( // On mobile we always render the card on the right
                                            <div
                                                className={`timeline-card bg-[#0b0f19] border border-white/5 rounded-2xl p-5 w-full md:w-[90%] relative hover:-translate-y-1 transition-transform duration-300 ${isLeft ? 'md:hidden block' : 'block'}`}
                                            >
                                                <div
                                                    className="absolute top-0 left-0 w-full h-[2px] rounded-t-2xl"
                                                    style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
                                                />

                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="p-3 rounded-lg bg-black border border-white/10"
                                                        style={{ boxShadow: `0 0 10px ${exp.color}30` }}
                                                    >
                                                        {exp.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-base xl:text-lg">{exp.title}</h3>
                                                        <div className="flex items-center gap-2 mt-2 text-slate-400 text-xs xl:text-sm font-mono">
                                                            <Calendar size={14} />
                                                            <span>{exp.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NewExperience;
