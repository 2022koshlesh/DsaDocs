import React from "react";
import Layout from "@theme/Layout";
import { Eye } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // <-- Import Lottie
import "./cd.css"; // Ensure this CSS is styled as needed

const profiles = [
  {
    title: "Leetcode",
    link: "https://leetcode.com/",
    img: "/img/leetcod.png",
    alt: "Leetcode",
  },
  {
    title: "CodeForces",
    link: "https://codeforces.com/",
    img: "/img/codeforces.jpg",
    alt: "CodeForces",
  },
  {
    title: "CodeChef",
    link: "https://www.codechef.com/",
    img: "/img/codechef.jpg",
    alt: "CodeChef",
  },
  {
    title: "CSES",
    link: "https://cses.fi/problemset/",
    img: "/img/CSES.png",
    alt: "CSES",
  },
  {
    title: "LintCode",
    link: "https://www.lintcode.com/",
    img: "/img/lintcode.png",
    alt: "LintCode",
  },
  {
    title: "HackerRank",
    link: "https://www.hackerrank.com/",
    img: "/img/hackerrank.png",
    alt: "HackerRank",
  },
  {
    title: "HackerEarth",
    link: "https://www.hackerearth.com/",
    img: "/img/hackerearth.png",
    alt: "HackerRank",
  },
  {
    title: "TUF",
    link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    img: "/img/tuf.png",
    alt: "TUF",
  },
  {
    title: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/",
    img: "/img/gfg.jpeg",
    alt: "GFG",
  },
  {
    title: "Coding Ninja",
    link: "https://www.naukri.com/",
    img: "/img/coding ninja (1).jpg",
    alt: "Coding Ninja",
  },
];

export default function Portfolio() {
  return (
    <Layout title="Coding Profiles">
      <div className="oval-title">
        
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/a8823a89-5255-4841-ab0f-a00cd4a6db55/9tKjekOSPp.lottie"
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>

        <h2 className="portfolio-title">Your Coding Journey Starts Here</h2>
      </div>

      <div className="portfolio-grid">
        {profiles.map((profile, idx) => (
          <div key={idx} className="portfolio-card">
            <figure className="project-img">
              <img
                src={profile.img}
                alt={profile.alt}
                className="project-image"
                loading="lazy"
              />
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="image-overlay"
              >
                <div className="glass">
                  <Eye className="eye-icon" size={30} />
                </div>
              </a>
            </figure>
            <h3 className="project-title">{profile.title}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}
