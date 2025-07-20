import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Trophy,
  Star,
  Zap,
  Target,
  Users,
  Code,
  Rocket,
} from "lucide-react";
import styles from "./Interview_p.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Hook to detect theme changes
const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const currentTheme =
        htmlElement.getAttribute("data-theme") ||
        (htmlElement.classList.contains("dark") ? "dark" : "light");
      setTheme(currentTheme);
    };

    checkTheme();

    // Create observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "data-theme" ||
            mutation.attributeName === "class")
        ) {
          checkTheme();
        }
      });
    });

    // Observe changes to html element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    // Also listen for custom theme change events (if your theme system uses them)
    const handleThemeChange = (event) => {
      setTheme(event.detail?.theme || event.detail || "light");
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return theme;
};

// Animation component using CSS modules
const BlurFade = ({ children, delay = 0, inView = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <div
      className={`${styles.blurFade} ${
        isVisible ? styles.blurFadeVisible : ""
      }`}
    >
      {children}
    </div>
  );
};

// Timeline component with scroll-based shining
const RoadmapTimeline = ({ achievements, theme }) => {
  const [shiningItems, setShiningItems] = useState(new Set());
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const newShiningItems = new Set();

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Check if item is in viewport (with some margin)
          const isInView =
            rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

          if (isInView) {
            newShiningItems.add(index);
          }
        }
      });

      setShiningItems(newShiningItems);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.timelineContainer} ref={timelineRef}>
      {/* Center vertical line */}
      <div className={styles.timelineLine}></div>

      {/* Timeline Items */}
      <div>
        {achievements.map((achievement, index) => {
          const isShining = shiningItems.has(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={achievement.id || index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`${styles.timelineItem} ${
                isLeft ? styles.timelineItemLeft : styles.timelineItemRight
              }`}
            >
              {/* Content Side */}
              <div
                className={`${styles.timelineContent} ${
                  isLeft
                    ? styles.timelineContentLeft
                    : styles.timelineContentRight
                }`}
              >
                <div
                  className={`${styles.timelineCard} ${
                    isLeft ? styles.timelineCardLeft : styles.timelineCardRight
                  } ${isShining ? styles.timelineCardShining : ""} ${
                    styles[achievement.bgColor]
                  }`}
                >
                  <div
                    className={`${styles.achievementHeader} ${
                      isLeft
                        ? styles.achievementHeaderLeft
                        : styles.achievementHeaderRight
                    }`}
                  >
                    <div
                      className={`${styles.achievementIconWrapper} ${
                        styles[achievement.bgColor]
                      } ${
                        isLeft
                          ? styles.achievementIconLeft
                          : styles.achievementIconRight
                      }`}
                    >
                      <achievement.icon
                        size={20}
                        className={styles[achievement.color]}
                      />
                    </div>
                    <h3 className={styles.achievementTitle}>
                      {achievement.title}
                    </h3>
                  </div>

                  {/* Lottie Animation Container */}
                  {achievement.lottieUrl && (
                    <div className={styles.lottieContainer}>
                      <DotLottieReact
                        src={achievement.lottieUrl}
                        loop
                        autoplay
                        style={{
                          width: achievement.lottieSize?.width || 150,
                          height: achievement.lottieSize?.height || 150,
                          display: "block",
                        }}
                      />
                    </div>
                  )}

                  <p
                    className={styles.achievementDescription}
                    style={{
                      lineHeight: "1.6",
                      textAlign: "justify",
                      fontSize: "0.95rem",
                      marginTop: "1rem",
                      color: theme === "dark" ? "#e0e0e0" : "#333",
                    }}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Timeline Center Point */}
              <div className={styles.timelineCenter}>
                <div
                  className={`${styles.timelineDot} ${
                    styles[achievement.bgColor]
                  } ${isShining ? styles.timelineDotShining : ""}`}
                >
                  <div
                    className={`${styles.timelineDotInner} ${
                      isShining
                        ? styles.timelineDotInnerShining
                        : styles[
                            achievement.color.replace("text", "bg") + "Solid"
                          ]
                    }`}
                  ></div>
                </div>
                <span
                  className={`${styles.timelineYear} ${
                    isShining ? styles.timelineYearShining : ""
                  }`}
                >
                  {achievement.year}
                </span>
              </div>

              {/* Empty Side */}
              <div className={styles.timelineEmpty}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main Roadmaps component
const InterviewProcess = () => {
  const theme = useTheme();

  const achievements = [
    {
      id: 1,
      title: "Resume Screening",
      description: `Resume screening is essential because it quickly filters out unqualified applicants,
                    ensuring only the most suitable and skills-aligned candidates, based on the job description, move forward.
                    This streamlines the hiring process, saves time, and increases the chances of selecting a candidate who truly fits the role.`,
      lottieUrl:
        "https://lottie.host/d3178be8-1c7a-4660-98ca-e13ab3a2a05c/AFUGb4lDqK.lottie",
      lottieSize: { width: 200, height: 200 },
      year: "Round 1",
      icon: Code,
      color: "textBlue400",
      bgColor: "bgBlue500",
    },
    {
      id: 2,
      title: "Online Test",
      description: `One test includes Aptitude, Computer Science fundamentals, Reasoning, Quantitative ability, English comprehension, and Code Debugging. 
It is entirely based on multiple-choice questions (MCQs).`,
      lottieUrl:
        "https://lottie.host/ba455750-3dda-45bb-85d0-c796a712a710/u4oEBxwpoE.lottie",
      year: "Round 2",
      icon: Rocket,
      color: "textGreen400",
      bgColor: "bgGreen500",
    },
   {
  id: 3,
  title: "Technical Interview 1",
  description:
    "This round primarily tests Data Structures and Algorithms (DSA) through real-time problem-solving. Candidates are expected to write optimized code, explain their approach, and handle edge cases under time constraints.",
  lottieUrl:
    "https://lottie.host/c0c55299-33c1-4531-b1e4-a0bf2c4927c1/UKqnrzo0hJ.lottie",
  lottieSize: { width: 180, height: 120 },
  year: "Round 3",
  icon: Users,
  color: "textPurple400",
  bgColor: "bgPurple500",
},

    {
  id: 4,
  title: "Technical Interview 2",
  description:
    "This round includes coding challenges, system design tasks, and questions from core CS subjects like DBMS, OS, CN, and OOPs. It also involves discussions based on your resume, including past projects, internships, and relevant skills.",
  lottieUrl:
    "https://lottie.host/157b5087-098a-4115-9d8f-0ff8a6c5f79e/WkwW8Kx0p0.lottie",
  // No lottieSize defined - will use default
  year: "Round 4",
  icon: Zap,
  color: "textOrange400",
  bgColor: "bgOrange500",
}
,
    {
  id: 5,
  title: "HR Interview",
  description:
    "The HR round focuses on evaluating a candidate's personality, communication skills, cultural fit, and alignment with the company’s values. Topics may include salary expectations, relocation flexibility, career goals, and past experiences.",
  lottieUrl:
    "https://lottie.host/e1f4fe5f-bfd6-43e4-8c78-21cb8eb28193/1nh0WVaCTX.lottie", // HR-themed animation
  lottieSize: { width: 210, height: 210 }, // Square animation
  year: "Round 5",
  icon: Users,
  color: "textBlue400",
  bgColor: "bgBlue500",
}
,
    {
  id: 6,
  title: "Placed",
  description:
    "After successfully clearing all rounds, the candidate receives the final offer letter. This stage marks the official onboarding and confirms placement with the organization.",
  lottieUrl:
    "https://lottie.host/b8de7e54-ad51-45c4-a976-cc1c7f16ee4e/O3Op0hNg0C.lottie", // Placement animation
  lottieSize: { width: 250, height: 250 }, // Square animation
  year: "Final Round",
  icon: Trophy,
  color: "textRed400",
  bgColor: "bgRed500",
}

  ];

  return (
    <div className={styles.container} data-theme={theme}>
      <div className={styles.maxWidth}>
        <BlurFade delay={0}>
          <section style={{ marginBottom: "5rem", marginTop: "7rem" }}>
            <div style={{ textAlign: "center" }}>
              <h2
                className="interview-title"
                style={{
                  display: "inline-block",
                  padding: "10px 30px",
                  borderRadius: "50px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  fontFamily: "'Courier New', Courier, monospace",
                  marginBottom: "20px",
                }}
              >
                Interview Process
              </h2>
            </div>
            <p className={styles.sectionDescription}>
              Understand each step of our interview process, from initial
              screening to final evaluation, ensuring a smooth candidate
              experience.
            </p>

            <RoadmapTimeline achievements={achievements} theme={theme} />
          </section>
        </BlurFade>
      </div>
    </div>
  );
};

export default InterviewProcess;
