import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import LinkButton from "../components/LinkButton";
import { BsRobot } from "react-icons/bs";
function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <h2 className={styles.heroSubtitle}>
          Decentralized, Verifiable Oracles
        </h2>
        <p className={styles.heroDescription}>
          Integrate Chronicle's Decentralized, Verifiable Oracles into your
          dApp.
        </p>
        <div className={styles.getStartedButton}>
          <LinkButton
            text="Start Now"
            link="./Developers/tutorials/Remix"
            small={true}
          />
        </div>
      </div>
    </header>
  );
}

function FeatureItem({ title, description, href, icon }) {
  return (
    <Link to={href} className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "LEARN",
      description:
        "Explore Chronicle's decentralized, verifiable oracles, what sets them apart from other oracle solutions, and dive into their architecture.",
      icon: "📚",
      href: "./understandingChronicle",
    },
    {
      title: "DEVELOPERS",
      description:
        "Discover how to integrate Chronicle's Oracles and power your dApp with data.",
      icon: "🧩",
      href: "./Developers/start",
    },
    {
      title: "PRODUCTS",
      description:
        "Explore Chronicle: DeFi Oracles, Verified Asset Oracles, and beyond.",
      icon: "🛠️",
      href: "./Products/productsOverview",
    },
  ];

  return (
    <section className={styles.features}>
      {features.map((props, idx) => (
        <FeatureItem key={idx} {...props} />
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Chronicle Docs"
      noFooter={true}
      wrapperclassName="homepage"
    >
      <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
        <div>
          <div className={styles.stickyButton} id="sticky-button">
            <label htmlFor="offchat-menu">
              <BsRobot size={25} color="black" />
            </label>
          </div>
        </div>
      </main>
    </Layout>
  );
}
