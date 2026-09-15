import React from 'react';
import CommunityCard from './CommunityCard';
import styles from './CommunityResourcesSection.module.css';

function CommunityResourcesSection() {
  const resources = [
    {
      icon: '/img/LandingPage/quote-request.png',
      title: 'Request a New Data Feed / New Chain ',
      description: 'Request a new data feed or a new chain integration',
      link: 'https://form.typeform.com/to/mWnjjBxh',
      iconBackground: '#ffffff'
      
    },
       {
      icon: '/img/LandingPage/password.png',
      title: 'Get Access to Onchain Data',
      description: 'Get whitelisted for data access on production networks',
      link: 'https://form.typeform.com/to/LwlHi234',
      iconBackground: '#ffffff'
    },
    {
      icon: '/img/LandingPage/twitter.png',
      title: 'Follow us on X',
      description: 'Stay up to date with the latest news and updates',
      link: 'https://x.com/ChronicleLabs',
       iconBackground: '#ffffff'
    },
    {
      icon: '/img/LandingPage/discord.png',
      title: 'Join the Community',
      description: 'Join the community on Discord',
      link: 'https://discord.gg/H9rnwcU8p4',
       iconBackground: '#ffffff'
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}> Get in Touch</div>
        <div className={styles.grid}>
          {resources.map((resource) => (
            <CommunityCard
              key={resource.title}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              link={resource.link}
              iconBackground={resource.iconBackground}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityResourcesSection;