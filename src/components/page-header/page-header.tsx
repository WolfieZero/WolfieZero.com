import React from 'react';

import styles from './page-header.module.scss';

export interface PageHeaderProps {
  children: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ children }) => (
  <header className={styles.PageHeader}>{children}</header>
);
