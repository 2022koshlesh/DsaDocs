// components/CardItems.jsx
import React, { useRef } from 'react';
import styles from './card.module.css';

const CardItems = ({ certifications, variant = "container" }) => {
  const scrollContainerRef = useRef(null);

  const handleImageClick = (website) => {
    window.open(website, '_blank');
  };

  // Choose container class based on variant
  const containerClass = variant === "contentOnly" ? styles.contentOnly : styles.container;

  return (
    <div className={containerClass}>
      <div className={styles.wrapper}>
        <div className={styles.navigationContainer}>
          <div className={styles.scrollContainer} ref={scrollContainerRef}>
            <div className={styles.cardsGrid}>
              {certifications.map((certification, index) => (
                <div key={index} className={styles.cardItem}>
                  <div
                    className={styles.imageContainer}
                    onClick={() => handleImageClick(certification.website)}
                  >
                    <img
                      src={certification.image}
                      alt={certification.name}
                      className={styles.certificationImage}
                    />
                  </div>
                  <h3 className={styles.certificationTitle}>
                    {certification.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;