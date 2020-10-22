import { A } from 'elements';

import * as IconsAssets from './svgs';
import styles from './asset.module.scss';

type AssetProps = {
  name: Icons;
  className?: App.ClassName;
  link?: string;
  size?: string;
};

export const Asset: React.FunctionComponent<AssetProps> = ({ name, size, link, ...props }) => {
  const Component: React.FunctionComponent<App.ExtendedProps> = IconsAssets[name];

  const style: React.CSSProperties = {
    width: size,
    height: size,
  };

  if (link) {
    return (
      <A href={link} className={styles.AssetLink} label={name}>
        <Component className={styles.Asset} style={style} {...props} />
      </A>
    );
  }

  return <Component className={styles.Asset} style={style} {...props} />;
};

export enum Icons {
  instagram = 'Instagram',
  github = 'Github',
  twitter = 'Twitter',
}
