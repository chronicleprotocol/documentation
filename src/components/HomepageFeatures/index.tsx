import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Png: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Decentralized',
    Png: require('@site/static/img/truly-decentralized.png').default,
    description: (
      <>
        Chronicle Protocol sends data over multiple off and on-chain P2P channels. The protocol can continue running without multiple Feeds & Relays as long as a quorum is reached. Fraud proofs allow for auto-banning of malicious Feeds.
      </>
    ),
  },
  {
    title: 'Verifiable',
    Png: require('@site/static/img/verifiable.png').default,
    description: (
      <>
        Verifiability is at the core of Chronicle's mission. Every element of data can be intuitively and provably tracked, end-to-end: creating the first high integrity censorship-resistant layer for data transmission. Try it out on The Chronicle.
      </>
    ),
  },
  {
    title: 'Community-Powered Consensus',
    Png: require('@site/static/img/resilient.png').default,
    description: (
      <>
        Underpinning Chronicle Protocol is a community-powered consensus network of 22 Feed node operators that includes trusted protocols such as Infura, Etherscan, Gnosis, Gitcoin, Argent, MakerDAO, and dYdX.
      </>
    ),
  },
];

function Feature({title, Png, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} alt={title} className={styles.featurePng} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
