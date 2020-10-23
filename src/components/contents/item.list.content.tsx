import React from 'react';
import { A } from 'elements';

import { Content } from 'lib/contents';

import style from './contents.module.scss';

type ContentListItemProps = Content;

export const ContentListItem: React.FC<ContentListItemProps> = ({ title, type, path, blurb = '', metaLink = '#' }) => {
  let icon = '𝍌';
  let link = path;

  switch (type) {
    case 'link':
      icon = '⎘';
      link = metaLink;
      break;
    case 'video':
      icon = '▷';
      break;
    // no default
  }

  return (
    <article className={style.ListItem}>
      <h2 className={style.ListItem__title}>
        <A href={link} className={style.ArticleItem__link}>
          {icon} {title}
        </A>
      </h2>
      <p>{blurb}</p>
      <p>
        <A href={path} className={style.ArticleItem__link}>
          Read more...
        </A>
      </p>
    </article>
  );
};
