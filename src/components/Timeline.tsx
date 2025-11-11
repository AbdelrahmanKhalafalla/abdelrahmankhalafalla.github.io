import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
;
;
import { Briefcase, GraduationCap, Cpu, Wrench } from "lucide-react";

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const timelineItems = [
    {
      year: "August 2025",
      title: "Machine Learning Engineer",
      description: [
        { text: "Designed and deployed predictive ML models for company's sales forecasting." },
        { text: "Implemented data augmentation strategies to improve model robustness." },
        { text: "Collaborated with cross-functional teams to integrate ML solutions into existing systems." },
      ],
      company: "Elevvo Pathways",
      icon: Cpu,
    },
    {
      year: "January 2025",
      title: "Graduated From Cyprus International University",
      description: [
        { text: "Graduated With Bachelor Of Science In Electrical and Electronics Engineering.", noBullet: true },
        { text: "Honours List" },
      ],
      icon: GraduationCap,
    },
    {
      year: "January 2024",
      title: "Hardware Engineer",
      company: "Turkcell",
      description: [
        { text: "Designed multi-layer PCBs using Altium Designer and KiCad." },
        { text: "Developed multi-layer circuit boards for IoT devices." },
        { text: "Collaborated with mechanical and software teams on IoT projects." },
        { text: "Conducted testing and validation of hardware components." },
      ],
      icon: Wrench,
    },
    {
      year: "June 2023",
      title: "Internship",
      company: "Turkish Electrical Corporation",
      description: [
        { text: "Collaborated in the design and implementation of electrical systems for various projects." },
        { text: "Developed understanding of power system structures and quality assessment methods." },
        { text: "Designed and implemented PLC-based automation for a production line." },
        { text: "Conducted maintenance and repairs on electrical equipment." },
      ],
      icon: Briefcase,
    },
    {
      year: "March 2021",
      title: "Started Bachelors of Electrical and Electronics Engineering",
      description: [
        { text: "I Started my Engineering Journey With a Bachelor of Sience In Electrical and Electronics Engineering At Cyprus International University.", noBullet: true },
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="journey"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative"
      style={{ fontFamily: "Roboto" }}
    >
      <style>{`
        .timeline-container { position: relative; max-width: 1000px; margin: 0 auto; }
        .timeline-line { position: absolute; right: 85%; top: 0; bottom: 0; width: 3px; background: red; transform: translateX(50%); z-index: 0; }
        .timeline-item { position: relative; display: flex; align-items: flex-start; margin-bottom: 4rem; }
        .timeline-dot { position: absolute; right: 85%; transform: translateX(50%); width: 40px; height: 40px; border-radius: 50%; background-color: black; z-index: 10; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; }
        .timeline-dot.active { background-color: red; transform: translateX(50%) scale(1.1); }
        .arrow { position: absolute; top: 50%; left: -14px; transform: translateY(-50%) rotate(0deg); width: 0; height: 0; border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 8px solid black; transition: transform 0.3s ease; }
        .timeline-dot.active .arrow { transform: translateY(-50%) rotate(90deg); }
        .timeline-content { position: relative; width: 60%; margin-left: 15%; padding-left: 2rem; text-align: left; }
        .timeline-title { font-size: 1.1rem; font-weight: bold; color: #000; }
        .timeline-sub { color: black; font-weight: bold; }
        .timeline-description { background-color: white; padding: 20px; border-radius: 8px; margin-top: 1rem; white-space: normal; line-height: 1.6; color: #333; }
        .timeline-description li { margin-bottom: 0.5rem; }

        @media (max-width: 768px) {
          .timeline-line { left: 20% !important; }
          .timeline-dot { left: 11% !important; }
          .timeline-content { width: 75%; margin-left: 20%; }
          .timeline-dot.active { transform: translateX(50%); }
        }
      `}</style>

      <div className="text-center mb-16">
        <h2 className="text-black mb-4 text-3xl font-semibold"
          style={{ fontSize: "35px", fontFamily: "Roboto", fontWeight: "Bold" }}
        >
          Career Journey
        </h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineItems.map((item, index) => {
          const ContentWrapper = isMobile ? "div" : motion.div; // plain div for mobile
          const contentProps = isMobile
            ? {}
            : { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.15 }, viewport: { once: true } };

          return (
            <ContentWrapper key={index} {...contentProps} className={`timeline-item ${activeIndex === index ? "active" : ""}`}>
              <div
                className={`timeline-dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="arrow"></div>
                <item.icon size={18} color={activeIndex === index ? "white" : "red"} />
              </div>

              <div className="timeline-content">
                <h3 className="timeline-title">{item.year}</h3>
                <p className="timeline-sub">
                  {item.title} {item.company && <span className="text-black">at {item.company}</span>}
                </p>

                {activeIndex === index && (
                  <ul className="timeline-description">
                    {item.description.map((desc, i) => (
                      <li key={i} style={{ listStyleType: desc.noBullet ? "none" : "disc", marginLeft: desc.noBullet ? "0" : "1rem", fontWeight: desc.noBullet ? "500" : "normal" }}>
                        {desc.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ContentWrapper>
          );
        })}
      </div>
    </section>
  );
}
