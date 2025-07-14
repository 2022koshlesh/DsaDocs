import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const quotes = [
    "Unlock the Power of DSA with DsaDocs: Your Ultimate Documentation Resource.",
    "Master DSA Concepts with Ease - Welcome to DsaDocs.",
    "DSA Made Simple, Smart, and Interactive - Only at DsaDocs.",
    "Learn, Code, and Conquer DSA - The DsaDocs Way!",
    "Focus on What Matters - Let DsaDocs Guide Your DSA Journey.",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFade(true); // trigger fade-in
      }, 800); // match fade-out duration
    }, 5000); // every 5 seconds

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p
          className={clsx("hero__subtitle", styles.fadeQuote, !fade && styles.fadeOut)}
        >
          {quotes[quoteIndex]}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            DSA Tutorial - Get Started 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
