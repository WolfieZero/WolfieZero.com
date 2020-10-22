import React from 'react';
import { LogoStar } from './star.logo';
import { LogoText } from './text.logo';
import styles from './logo.module.scss';

export const Logo = (): JSX.Element => {
  return (
    <div className={styles.Logo}>
      <LogoStar className={styles.Logo__star} />
      <LogoText className={styles.Logo__text} />
    </div>
  );
};
