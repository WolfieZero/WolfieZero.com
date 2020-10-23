import React from 'react';

import { ContentListItem } from 'components/contents/item.list.content';
import { Content } from 'lib/contents';

import styles from './contents.module.scss';

export interface ContentsListProps {
  items: Content[];
}

export const ContentsList: React.FC<ContentsListProps> = ({ items = [] }) => {
  return (
    <>
      <ul className={styles.List}>
        {items.map((item, index) => (
          <li key={index}>
            <ContentListItem {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};
