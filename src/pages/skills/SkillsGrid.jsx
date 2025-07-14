import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import  skills  from './details';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import Interviewprocess from './Interview_process'
import {
  Code, Database, Server, Github,
  Globe, FileCode, Layers,
  Cpu, Codepen,
  Cloud, Terminal, Zap, Box
} from 'lucide-react';

// Icons mapping for skills
const skillIcons = {
   // Frontend
  "HTML5": <Globe className="text-orange-400" size={16} />,
  "CSS3": <FileCode className="text-blue-400" size={16} />,
  "JavaScript": <Code className="text-yellow-400" size={16} />,
  "ReactJS": <Zap className="text-cyan-400" size={16} />,
  "React Native": <Zap className="text-purple-400" size={16} />,
  "Next.js": <Box className="text-white" size={16} />,
  "Angular": <Codepen className="text-red-400" size={16} />,
  "Tailwind CSS": <Layers className="text-cyan-400" size={16} />,
  "Bootstrap": <Layers className="text-purple-400" size={16} />,
  "jQuery": <Code className="text-blue-300" size={16} />,
  
  // Backend
  "Node.js": <Server className="text-green-400" size={16} />,
  "Express.js": <Server className="text-gray-300" size={16} />,
  "PHP": <FileCode className="text-purple-400" size={16} />,
  "REST APIs": <Terminal className="text-green-300" size={16} />,
  "Spring Boot": <Server className="text-green-400" size={16} />,
  
  // Programming
  "C": <Terminal className="text-blue-400" size={16} />,
  "C++": <Terminal className="text-blue-500" size={16} />,
  "Java": <Terminal className="text-orange-400" size={16} />,
  "Python": <Terminal className="text-yellow-300" size={16} />,
  "Golang": <Terminal className="text-yellow-300" size={16} />,
  "Data Structures & Algorithms": <Cpu className="text-green-300" size={16} />,
  "Competitive Programming": <Cpu className="text-purple-300" size={16} />,
  
  // Databases & Cloud
  "MongoDB": <Database className="text-green-400" size={16} />,
  "MySQL": <Database className="text-blue-400" size={16} />,
  "Firebase": <Database className="text-orange-400" size={16} />,
  "AWS": <Cloud className="text-orange-300" size={16} />,
  "Docker": <Cloud className="text-blue-300" size={16} />,
  
  // Version Control
  "Git": <Github className="text-orange-400" size={16} />,
  "GitHub": <Github className="text-gray-300" size={16} />
};


const mainCategories = ["Frontend", "Backend", "Programming", "Infrastructure"];

const SkillItem = ({ skill }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div 
      className={`flex items-center gap-2 py-2 px-3 border-b border-gray-700/50 
                  hover:bg-gray-700/30 cursor-pointer 
                  rounded-lg ${
                    isActive 
                      ? 'bg-indigo-500/30 shadow-lg shadow-indigo-500/30 border-indigo-500/50' 
                      : ''
                  }`}
      onClick={() => setIsActive(!isActive)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: isActive ? 1.02 : 1,
        backgroundColor: isActive ? 'rgba(99, 102, 241, 0.3)' : 'transparent'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div>{skillIcons[skill.content]}</div>
      <motion.span 
        className="text-sm text-gray-200"
        animate={{ color: isActive ? '#ffffff' : '#e5e7eb' }}
      >
        {skill.content}
      </motion.span>
    </motion.div>
  );
};

const SkillsGrid = () => {
  const categorizedSkills = {
    Frontend: [],
    Backend: [],
    Programming: [],
    Infrastructure: [],
  };

  Object.entries(skills).forEach(([category, skillsList]) => {
    if (categorizedSkills[category]) {
      categorizedSkills[category] = [...skillsList];
    }
  });

  return (
    <div className="w-full pt-4 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainCategories.map((category) => (
          <div
            key={category}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30 hover:border-indigo-500/30 transition-colors"
          >
            <h3 className="text-lg font-medium text-white mb-4 pb-2 border-b border-gray-700 flex items-center gap-2">
              {category === "Frontend" && <Globe size={18} className="text-blue-400" />}
              {category === "Backend" && <Server size={18} className="text-green-400" />}
              {category === "Programming" && <Code size={18} className="text-yellow-400" />}
              {category === "Infrastructure" && <Database size={18} className="text-purple-400" />}
              {category}
            </h3>
            <div className="space-y-1">
              {categorizedSkills[category]?.length > 0 ? (
                categorizedSkills[category].map((skill) => (
                  <SkillItem key={skill.id} skill={skill} />
                ))
              ) : (
                <div className="text-sm text-gray-400 italic">No skills listed</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const useScopedTailwind = () => {
  useEffect(() => {
    const id = 'tailwind-skills-css';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/css/tailwind-skills.css';
      link.id = id;
      document.head.appendChild(link);
    }

    return () => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    };
  }, []);
};

function SkillsWithNavbar() {
  useScopedTailwind();
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <Layout title="My Skills">
      {/* Glassmorphism Navbar */}
      <div className="flex justify-center my-6">
        <nav className="glass-navbar">
          <div className="navbar-container">
            <div 
              className={`nav-tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </div>
            <div 
              className={`nav-tab ${activeTab === 'roadmaps' ? 'active' : ''}`}
              onClick={() => setActiveTab('roadmaps')}
            >
              Interview Process
            </div>
            <div className="nav-indicator" style={{
              left: activeTab === 'skills' ? '25%' : '75%'
            }}></div>   
          </div>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'skills' && (
        <>
          <div className="oval-title" >
            <div className="lottie-container">
              <DotLottieReact
                src="https://lottie.host/a1eadc63-0bb3-4418-927b-41b91c7298e4/PrKg6nbxzj.lottie"
                loop
                autoplay
                style={{ width: 200, height: 200 }}
              />
            </div>
            <h2 className="portfolio-title">Top Tech Skills Every Developer Should Learn</h2>
          </div>
          <div className="mb-16"> {/* Added margin-bottom */}
      <SkillsGrid />
    </div>
        </>
      )}

      {activeTab === 'roadmaps' && (
        <div className="text-center py-16">
          {/* <h2 className="text-2xl font-bold text-white mb-4">Roadmaps Coming Soon</h2>
          <p className="text-gray-400">We're working on comprehensive learning roadmaps for developers.</p> */}
          <Interviewprocess />
        </div>
      )}

      {/* CSS Styles - Only navbar changes */}
      <style jsx>{`
        .glass-navbar {
          position: absolute;
          top: 18%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 1rem 2rem;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 20px;
          z-index: 10;
        }

        [data-theme='dark'] .glass-navbar {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25), 0 0 10px rgba(255, 255, 255, 0.1);
        }

        [data-theme='light'] .glass-navbar {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.05);
        }

        .navbar-container {
          position: relative;
          display: flex;
          gap: 2.5rem;
          align-items: center;
          justify-content: center;
        }

        .nav-tab {
          padding: 0.75rem 2rem;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          border-radius: 999px;
        }

        [data-theme='dark'] .nav-tab {
          color: rgba(255, 255, 255, 0.7);
        }

        [data-theme='light'] .nav-tab {
          color: rgba(0, 0, 0, 0.7);
        }

        .nav-tab.active {
          font-weight: 600;
        }

        [data-theme='dark'] .nav-tab.active {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 10px rgba(255, 251, 0, 0.93); /* Gold shadow */
        }

        [data-theme='light'] .nav-tab.active {
          color: black;
          background: rgba(0, 0, 0, 0.05);
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.3); /* Gold shadow */
        }

        [data-theme='dark'] .nav-tab:hover {
          color: white;
        }

        [data-theme='light'] .nav-tab:hover {
          color: black;
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, #FFD700, #DAA520); /* Gold gradient */
          border-radius: 10px;
          transition: all 0.3s ease;
        }
          
        .oval-title {
          text-align: center;
          margin: 5rem 0 2rem;
        }
          footer.footer {
    margin-top: 4rem !important;
    padding-top: 2rem !important;
  }

      `}</style>
    </Layout>
  );
}


export default SkillsWithNavbar;