import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Main project – Food Order App */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Food Order Web & Mobile App" />
            </div>
            <div className="text-content">
              <h2>
                Full-Stack Food Order Platform – Web &amp; Mobile
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with PHP, HTML, CSS, MySQL, Flutter, Ruby on Rails &amp; Rails Admin. Features product listing, order management, categories, and a powerful admin panel.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Second project – Loan Processing System */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#1a1a2e]">
                <img
                  src="/images/project2.png"
                  alt="Automated Loan Processing System"
                />
              </div>
              <h2>Automated Loan Processing System</h2>
            </div>

            {/* Third project – E-Commerce App (Flutter) */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#0d2137]">
                <img src="/images/project3.png" alt="Flutter E-Commerce App" />
              </div>
              <h2>E-Commerce Mobile App – Flutter &amp; Firebase</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
