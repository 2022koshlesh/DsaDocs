import React from 'react';
import Layout from '@theme/Layout';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './MockInterview.module.css';

export default function MockInterview() {
  const cardData = [
    {
      title: 'Pramp',
      description:
        'Prepare for behavioral questions and soft skills evaluation typically asked by HR professionals.',
      img: '/img/pramp.jpeg',
      link: 'https://www.pramp.com/',
    },
    {
      title: 'Exponent',
      description:
        'Prepare for behavioral questions and soft skills evaluation typically asked by HR professionals.',
      img: '/img/exponent.jpeg',
      link: 'https://www.tryexponent.com/practice',
    },
    {
      title: 'Interviewing io',
      description:
        'Practice coding problems and system design questions that mirror real technical interviews.',
      img: '/img/interviewingio.jpeg',
      link: 'https://interviewing.io/',
    },
    {
      title: 'Remasto',
      description:
        'Enhance your communication skills with mock group discussion rounds and peer feedback.',
      img: '/img/remasto.jpg',
      link: 'https://remasto.com/',
    },
     {
      title: 'Final Round AI',
      description:
        'Practice coding problems and system design questions that mirror real technical interviews.',
      img: '/img/finalroundai.jpg',
      link: 'https://www.finalroundai.com/',
    },
    
  ];

  return (
    <Layout title="Mock Interview">
      <div className={styles.containerCenter}>
         <div className="oval-title">
                
                <div className="lottie-container">
                  <DotLottieReact
                    src="https://lottie.host/d5efc61b-e9b8-46c5-940e-d0abaef1b68d/XK9m6hy4m3.lottie"
                    loop
                    autoplay
                    style={{ width: 300, height: 300 }}
                  />
                </div>
        
                <h2 className="portfolio-title">Mock Interview</h2>
              </div>

        <p style={{fontFamily: "'Courier New', Courier, monospace", fontSize: "1.2rem"}}>
          Mock interviews are a great way to prepare for real job interviews. They help you practice
          your answers to common interview questions, improve your communication skills, and build
          confidence.
        </p>

        <div className={styles.cardWrapper}>
          {cardData.map((card, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className={styles.cardImage}
                  />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className={styles.cardBack}>
                  <div className={styles.ctaButtonWrapper}>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary"
                    >
                      Start Mock Interview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
