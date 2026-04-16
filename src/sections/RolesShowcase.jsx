import React from "react";

const roles = [
    "Mobile App Developer",
    "•",
    "WebApp Developer",
    "•",
    "AI Engineer LLMs and Model",
    "•",
    "VAPT and Ethical Hacker",
    "•",
];

const RoleItem = ({ role }) => {
    return (
        <div className="flex-none flex-center marquee-item mx-3 sm:mx-4 md:mx-8">
            {role === "•" ? (
                <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#6366f1] opacity-70 font-bold">•</span>
            ) : (
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white-50 uppercase tracking-widest">{role}</h2>
            )}
        </div>
    );
};

const RolesShowcase = () => (
    <section className="md:my-20 my-10 relative overflow-hidden py-6 md:py-10 bg-black/20 border-y border-white/5">
        <div className="absolute left-0 top-0 w-12 sm:w-20 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-12 sm:w-20 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <div className="marquee flex h-full items-center">
            <div className="marquee-box flex">
                {roles.map((role, index) => (
                    <RoleItem key={index} role={role} />
                ))}
                {roles.map((role, index) => (
                    <RoleItem key={`clone-${index}`} role={role} />
                ))}
                {roles.map((role, index) => (
                    <RoleItem key={`clone2-${index}`} role={role} />
                ))}
            </div>
        </div>
    </section>
);

export default RolesShowcase;
