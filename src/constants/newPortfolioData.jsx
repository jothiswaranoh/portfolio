import React from 'react';
import { FaReact, FaPython, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux, FaMicroscope } from "react-icons/fa";
import { SiRubyonrails, SiFastapi, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbDeviceMobile } from "react-icons/tb";
import { Rocket, Bot, Dna, Smartphone, Lock, Zap, Mic, BrainCircuit, Link } from 'lucide-react';

export const newExperienceData = [
    {
        id: 1,
        title: "Pathology - Deployment & Setup",
        date: "April 2025",
        icon: <Rocket size={24} className="text-[#0ea5e9]" />,
        color: "#0ea5e9", // Sky blue
    },
    {
        id: 2,
        title: "HAT Document Expert - Backend & AI",
        date: "May 2025",
        icon: <Bot size={24} className="text-[#8b5cf6]" />,
        color: "#8b5cf6", // Violet
    },
    {
        id: 3,
        title: "CellRanger / Santana Bio - Bioinformatics",
        date: "June - July 2025",
        icon: <Dna size={24} className="text-[#10b981]" />,
        color: "#10b981", // Emerald
    },
    {
        id: 4,
        title: "Recovera - Mobile Application",
        date: "August - September 2025",
        icon: <Smartphone size={24} className="text-[#f59e0b]" />,
        color: "#f59e0b", // Amber
    },
    {
        id: 5,
        title: "Secura - Security Platform",
        date: "October 2025",
        icon: <Lock size={24} className="text-[#ec4899]" />,
        color: "#ec4899", // Pink
    },
    {
        id: 6,
        title: "HAI-AI / AI-Works - Multi-Agent Platform",
        date: "November 2025 - February 2026",
        icon: <Zap size={24} className="text-[#eab308]" />,
        color: "#eab308", // Yellow
    },
    {
        id: 7,
        title: "Chief Guest & Leadership - Suguna College",
        date: "September 2025",
        icon: <Mic size={24} className="text-[#f43f5e]" />,
        color: "#f43f5e", // Rose
    },
    {
        id: 8,
        title: "RPX-PLAI - AI Platform Enhancements",
        date: "February 2026 - Present",
        icon: <BrainCircuit size={24} className="text-[#6366f1]" />,
        color: "#6366f1", // Indigo
    }
];

export const topSkills = [
    { name: "React Frontend", id: 1 },
    { name: "AI Agents (LangChain)", id: 2 },
    { name: "Node / FastAPI Backend", id: 3 },
    { name: "Rails + MongoDB", id: 4 },
    { name: "Docker & CI/CD", id: 5 }
];

export const newSkillsData = [
    { name: "React.js", icon: <FaReact size={32} className="text-[#61DAFB]" /> },
    { name: "Python", icon: <FaPython size={32} className="text-[#3776AB]" /> },
    { name: "Ruby on Rails", icon: <SiRubyonrails size={32} className="text-[#CC0000]" /> },
    { name: "FastAPI", icon: <SiFastapi size={32} className="text-[#009688]" /> },
    { name: "Docker", icon: <FaDocker size={32} className="text-[#2496ED]" /> },
    { name: "AWS", icon: <FaAws size={32} className="text-[#FF9900]" /> },
    { name: "MongoDB", icon: <SiMongodb size={32} className="text-[#47A248]" /> },
    { name: "AI Agents", icon: <Bot size={32} className="text-[#8b5cf6]" /> },
    { name: "Node.js", icon: <FaNodeJs size={32} className="text-[#339933]" /> },
    { name: "Git", icon: <FaGitAlt size={32} className="text-[#F05032]" /> },
    { name: "Linux", icon: <FaLinux size={32} className="text-[#FCC624]" /> },
    { name: "React Native", icon: <TbDeviceMobile size={32} className="text-[#61DAFB]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-[#4169E1]" /> },
    { name: "LangChain", icon: <Link size={32} className="text-[#10b981]" /> },
    { name: "Bioinformatics", icon: <FaMicroscope size={32} className="text-[#10b981]" /> }
];
