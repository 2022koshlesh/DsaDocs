import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './RoleBasedRoadmap.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const roadmapData = [
  { id: 1, title: 'Computer Science', url: 'https://roadmap.sh/computer-science'},
  { id: 2, title: 'Frontend', url: 'https://roadmap.sh/frontend'},
  { id: 3, title: 'Backend', url: 'https://roadmap.sh/backend'},
  { id: 4, title: 'DevOps', url: 'https://roadmap.sh/devops'},
  { id: 5, title: 'Full Stack', url: 'https://roadmap.sh/full-stack'},
  { id: 6, title: 'AI Engineer', url: 'https://roadmap.sh/ai-engineer'},
  { id: 7, title: 'Data Analyst', url: 'https://roadmap.sh/data-analyst'},
  { id: 8, title: 'AI and Data Scientist', url: 'https://roadmap.sh/ai-data-scientist'},
  { id: 9, title: 'Android', url: 'https://roadmap.sh/android'},
  { id: 10, title: 'iOS', url: 'https://roadmap.sh/ios'},
  { id: 11, title: 'PostgreSQL', url: 'https://roadmap.sh/postgresql-dba'},
  { id: 12, title: 'Blockchain', url: 'https://roadmap.sh/blockchain'},
  { id: 13, title: 'QA', url: 'https://roadmap.sh/qa'},
  { id: 14, title: 'Software Architect', url: 'https://roadmap.sh/software-architect'},
  { id: 15, title: 'Cyber Security', url: 'https://roadmap.sh/cyber-security'},
  { id: 16, title: 'UX Design', url: 'https://roadmap.sh/ux-design'},
  { id: 17, title: 'Game Developer', url: 'https://roadmap.sh/game-developer'},
  { id: 18, title: 'Technical Writer', url: 'https://roadmap.sh/technical-writer'},
  { id: 19, title: 'MLOps', url: 'https://roadmap.sh/mlops'},
  { id: 20, title: 'Product Manager', url: 'https://roadmap.sh/product-manager'},
  { id: 21, title: 'Engineering Manager', url: 'https://roadmap.sh/engineering-manager'},
  { id: 22, title: 'Developer Relations', url: 'https://roadmap.sh/developer-relations'},
];

export default function RoleBasedRoadmap() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (role) => {
    // Option 1: Open in new tab (recommended)
    window.open(role.url, '_blank', 'noopener,noreferrer');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRole(null);
    document.body.style.overflow = 'auto';
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);

  const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  return (
    <Layout title="Role Based Roadmaps" description="Choose your role and explore the roadmap to mastery.">
      <div className={styles.container}>
       <div className="oval-title">
                
                <div className="lottie-container">
                  <DotLottieReact
                    src="https://lottie.host/db5d1aac-1abb-4757-bda0-878124384314/XmWn0uWBa5.lottie"
                    loop
                    autoplay
                    style={{ width: 300, height: 300 }}
                  />
                </div>
        
                <h2 className="portfolio-title">Role Based Roadmaps</h2>
              </div>
                <p style={{fontFamily: "'Courier New', Courier, monospace", fontSize: "20px", textAlign: "center"}}>Choose your role and explore the roadmap to mastery</p>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {roadmapData.map((role) => (
            <div key={role.id} onClick={() => handleCardClick(role)} className={styles.card}>
              {role.isNew && <div className={styles.newBadge}>New</div>}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{role.title}</h3>
                <div className={styles.cardIcons}>
                  <ExternalLinkIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative Modal with Information instead of iframe */}
        {isModalOpen && selectedRole && (
          <div className={`${styles.modal} ${styles.active}`} onClick={handleModalBackdropClick}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{selectedRole.title} Roadmap</h2>
                <button onClick={closeModal} className={styles.closeBtn}>
                  <CloseIcon />
                </button>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.modalInfo}>
                  <p>This roadmap will help you learn and master {selectedRole.title} development.</p>
                  <div className={styles.modalActions}>
                    <button 
                      onClick={() => window.open(selectedRole.url, '_blank', 'noopener,noreferrer')}
                      className={styles.viewRoadmapBtn}
                    >
                      View Roadmap <ExternalLinkIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}