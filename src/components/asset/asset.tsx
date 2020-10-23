import { A } from 'elements';

import * as IconsAssets from './svgs';
import styles from './asset.module.scss';

export interface AssetProps {
  name: Icons;
  className?: App.ClassName;
  link?: string;
  size?: string;
}

export enum Icons {
  instagram = 'Instagram',
  github = 'Github',
  twitter = 'Twitter',
}

export const Asset: React.FC<AssetProps> = ({ name, size, link, ...props }) => {
  const Component: React.FC<App.ExtendedProps> = IconsAssets[name];

  const style: React.CSSProperties = {
    width: size,
    height: size,
  };

  if (link) {
    return (
      <A href={link} className={styles.AssetLink} label={name}>
        {name}
        <Component className={styles.Asset} style={style} {...props} />
      </A>
    );
  }

  return <Component className={styles.Asset} style={style} {...props} />;
};
