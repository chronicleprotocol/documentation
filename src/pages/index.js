import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import LinkButton from "../components/LinkButton";
import CommunityResourcesSection from "../components/CommunityCard";

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <h2 className={styles.heroSubtitle}>
          Verification Infrastructure for Onchain Markets
        </h2>
        <p className={styles.heroDescription}>
       Integrate onchain data powered by Chronicle into your application.
        </p>
        <div className={styles.getStartedButton}>
          <LinkButton text="Start Now" link="./Developers/tutorials/Remix" small={true} />
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
          title: "Learn",
          description:
            "Explore Chronicle’s verification infrastructure, discover what sets it apart from other solutions, and dive into its architecture.",
          icon: "📚",
          href: "./understandingChronicle",
        },
        {
          title: "Developers",
          description:
            "Discover how to integrate Chronicle's onchain data to power your application.",
          icon: "🧩",
          href: "./Developers/start",
        },
        {
          title: "Products",
          description:
            "Explore Chronicle: data feeds, Proof of Asset, and beyond.",
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
      wrapperClassName="homepage"
    >
      <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
        <CommunityResourcesSection />
      </main>
    </Layout>
  );
}