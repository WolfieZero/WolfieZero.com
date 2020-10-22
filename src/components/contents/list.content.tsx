import React from 'react';

import { ContentListItem } from 'components/contents/item.list.content';
import { Content } from 'lib/contents';

import styles from './contents.module.scss';

interface IPropsContentsList {
  items: Content[];
}

export const ContentsList = ({ items = [] }: IPropsContentsList): JSX.Element => {
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
