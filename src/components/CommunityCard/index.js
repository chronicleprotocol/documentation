import React from 'react';
import CommunityCard from './CommunityCard';
import styles from './CommunityResourcesSection.module.css';

function CommunityResourcesSection() {
  const resources = [
    {
      icon: '/img/LandingPage/quote-request.png',
      title: 'Request an Oracle',
      description: 'Request an Oracle for your project',
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
      link: 'https://discord.com/invite/CjgvJ9EspJ'
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