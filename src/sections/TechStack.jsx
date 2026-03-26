import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
<<<<<<< HEAD
import { newSkillsData } from "../constants/newPortfolioData";
=======
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
// import { techStackImgs } from "../constants";
>>>>>>> ce1357cb (Clean portfolio project)

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
<<<<<<< HEAD
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
=======
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
>>>>>>> ce1357cb (Clean portfolio project)
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
<<<<<<< HEAD
      <div className="w-full h-full md:px-10 px-0">
=======
      <div className="w-full h-full md:px-10 px-5">
>>>>>>> ce1357cb (Clean portfolio project)
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
<<<<<<< HEAD

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
=======
        <div className="tech-grid">
          {/* Loop through the techStackIcons array and create a component for each item. 
              The key is set to the name of the tech stack icon, and the classnames are set to 
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
              classes are only applied on larger screens. */}
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* The tech-card-animated-bg div is used to create a background animation when the 
                  component is hovered. */}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
                    which renders the 3D model of the tech stack icon. */}
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                {/* The padding-x and w-full classes are used to add horizontal padding to the 
                    text and make it take up the full width of the component. */}
                <div className="padding-x w-full">
                  {/* The p tag contains the name of the tech stack icon. */}
                  <p>{techStackIcon.name}</p>
>>>>>>> ce1357cb (Clean portfolio project)
                </div>
              </div>
            </div>
          ))}

<<<<<<< HEAD
=======
          {/* This is for the img part */}
          {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
>>>>>>> ce1357cb (Clean portfolio project)
        </div>
      </div>
    </div>
  );
};

export default TechStack;
