import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const LinkButton = ({ text, link, small }) => {
  return (
    <Link to={link}>
      <button
        className={small ? styles.smallCustomButton : styles.customButton}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;