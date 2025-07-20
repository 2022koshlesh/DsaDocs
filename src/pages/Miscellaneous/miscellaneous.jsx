import React from 'react';
import Layout from '@theme/Layout';
import CardItems from './card/cardItems';
import { certifications } from '../../../details/certifications';
import { jobProfile } from '../../../details/jobProfile';
import { softwareTools } from '../../../details/softwareTools'; 
import {AItool} from '../../../details/AItool';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '././card/card.module.css';

const Miscellaneous = () => {
  return (
    <Layout title="Certifications">
      <div className="oval-title">
        <div className="lottie-container">
          <DotLottieReact
            src="https://lottie.host/435dad08-f71b-482b-a643-40aabd470226/17PoXvuhyo.lottie"
            loop
            autoplay
            style={{ width: 250, height: 300 }}
          />
        </div>
        <h2 className="portfolio-title">Explore the necessary tools</h2>
      </div>
      <p style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: "20px", textAlign: "center" }}>
        Empower your tech journey with essential tools every IT student needs — from coding platforms and version control to debugging, testing, and collaboration utilities, all in one seamless ecosystem.
      </p>
      
      {/* Main container with padding */}
      <div className={styles.container}>

        <h1 className={styles.shinyHeadingTight}>Software Tools</h1>
        <CardItems certifications={softwareTools} variant="contentOnly" />

        <h1 className={styles.shinyHeading}>Certification</h1>
        <CardItems certifications={certifications} variant="contentOnly" />
        
        <h1 className={styles.shinyHeadingTight}>Job Search</h1>
        <CardItems certifications={jobProfile} variant="contentOnly" />

        <h1 className={styles.shinyHeadingTight}>AI Tools</h1>
        <CardItems certifications={AItool} variant="contentOnly" />
     
      </div>
    </Layout>
  );
};

export default Miscellaneous;