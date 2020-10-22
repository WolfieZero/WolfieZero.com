import { Asset, AssetGroup, Icons } from 'components/asset';
import { social } from 'config.json';

import styles from './hero.module.scss';

export const HeroIntro: React.FunctionComponent = () => {
  const iconSize = '4rem';

  return (
    <>
      <div className={styles.HeroIntro}>
        <h1>
          Howdy, I&apos;m Neil Sweeney, <br />
          software engineer &amp; type 1 diabetic
        </h1>
        <p>
          I specialise in JavaScript development for mobile, cloud and desktop applications. I&apos;m also an avid
          whisky drinker.
        </p>
        <AssetGroup>
          <Asset name={Icons.instagram} size={iconSize} link={social.instagram.url} />
          <Asset name={Icons.github} size={iconSize} link={social.github.url} />
          <Asset name={Icons.twitter} size={iconSize} link={social.twitter.url} />
        </AssetGroup>
      </div>
    </>
  );
};
