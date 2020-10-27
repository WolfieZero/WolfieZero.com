import { classList } from 'helpers';
import styles from './hero.module.scss';

type HeroProps = {
  backgroundImage?: string;
  backgroundAlt?: string;
  modifiers?: string[];
};

export const Hero: React.FC<HeroProps> = ({ backgroundImage = '', backgroundAlt = '', modifiers = [], children }) => {
  if (backgroundImage && backgroundAlt) {
    children = (
      <>
        <img src={backgroundImage} alt={backgroundAlt} className={styles['Hero__background-image']} />
        {children}
      </>
    );
  }

  modifiers = modifiers.map(modifier => {
    return styles[`Hero--${modifier}`];
  });

  return <div className={classList([styles.Hero, modifiers])}>{children}</div>;
};
