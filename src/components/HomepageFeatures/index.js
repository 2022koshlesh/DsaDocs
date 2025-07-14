import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const FeatureList = [
  {
    title: 'Easy to Use',
    animation: (
      <div style={{ maxWidth: '200px' }}>
        <DotLottieReact
          src="https://lottie.host/d5efc61b-e9b8-46c5-940e-d0abaef1b68d/XK9m6hy4m3.lottie"
          loop
          autoplay
          style={{ width: '400px', height: '200px' }}
        />
      </div>
    ),
    description: (
      <>
        DsaDocs is your ultimate companion to ace coding interviews — built to give you fast, clear answers to your DSA queries, when it matters most.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    animation: (
      <div style={{ maxWidth: '200px' }}>
        <DotLottieReact
          src="https://lottie.host/3ae5eb8c-29d0-436b-a2ea-1d59c63525ff/zBrrRENy84.lottie"
          loop
          autoplay
          style={{ width: '400px', height: '200px' }}
        />
      </div>
    ),
    description: (
      <>
        DSADocs helps you master Data Structures and Algorithms—while we handle the heavy lifting. Just drop your books and dive into interactive coding.
      </>
    ),
  },
  {
    title: 'Built in Code, Driven by Passion',
    animation: (
      <div style={{ maxWidth: '200px' }}>
        <DotLottieReact
          src="https://lottie.host/322eb39f-8374-44a2-a8d2-aba177325183/C8EWgtCwcx.lottie"
          loop
          autoplay
          style={{ width: '400px', height: '200px' }}
        />
      </div>
    ),
    description: (
      <>
        A programmer turns coffee into code and logic into limitless possibilities.
      </>
    ),
  },
];

function Feature({ animation, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {animation}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
