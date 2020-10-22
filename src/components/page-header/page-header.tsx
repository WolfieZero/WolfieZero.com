import React from 'react';

import styles from './page-header.module.scss';

interface IPropsPageHeader {
  children: React.ReactNode;
}

export const PageHeader = ({ children }: IPropsPageHeader): JSX.Element => {
  return <header className={styles.PageHeader}>{children}</header>;
};
