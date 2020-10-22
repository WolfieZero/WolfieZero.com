import { classList } from 'helpers';
import styles from './hero.module.scss';

type HeroProp = {
  backgroundImage?: string;
  modifiers?: string[];
};

export const Hero: React.FunctionComponent<HeroProp> = ({ backgroundImage = '', modifiers = [], children }) => {
  let inlineStyle = {};

  if (backgroundImage) {
    inlineStyle = {
      backgroundImage: `url(${backgroundImage})`,
    };
  }

  modifiers = modifiers.map(modifier => {
    return styles['Hero__m_' + modifier];
  });

  return (
    <div className={classList([styles.Hero, modifiers])} style={inlineStyle}>
      {children}
    </div>
  );
};
