import React from 'react';
import CommunityCard from './CommunityCard';
import styles from './CommunityResourcesSection.module.css';

function CommunityResourcesSection() {
  const resources = [
    {
      icon: '/img/LandingPage/dataD.png',
      title: 'Request a new oracle',
      description: 'Request an oracle for your project',
      link: 'https://forms.gle/sPda9qGqQEkj6tms9'
      
    },
      {
      icon: '/img/LandingPage/quote-request.png',
      title: 'Request access to an existing oracle',
      description: 'Get access to onchain data to power your application',
      link: 'https://forms.gle/39vhXmFg88ti8HVC9'
      
    },
    {
      icon: '/img/LandingPage/twitter.png',
      title: 'Follow us on X',
      description: 'Stay up to date with the latest news and updates',
      link: 'https://x.com/ChronicleLabs'
    },
    {
      icon: '/img/LandingPage/discord.png',
      title: 'Join the Community',
      description: 'Join the community on Discord',
      link: 'https://discord.gg/H9rnwcU8p4'
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityResourcesSection;