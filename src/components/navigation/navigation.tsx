import React from 'react';
import { A } from 'elements';
import { display } from 'config.json';

import { NavigationItem } from './navigation.type';

import styles from './navigation.module.scss';

export interface NavigationProps {
  items: NavigationItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  if (!display.nav) {
    return <></>;
  }

  const _navItems = (item: NavigationItem) => {
    return (
      <li key={item.label} className={styles.Navigation__item}>
        <A href={item.link} role="menuitem">
          {item.label}
        </A>
      </li>
    );
  };

  return (
    <nav className={styles.Navigation}>
      <a href="#nav:open" role="switch">
        <span className={styles.NavIcon} />
      </a>
      <span className={styles.NavTrigger} id="nav:open" />
      <ul>
        <li className={styles.NavClose}>
          <a href="#nav:close" role="switch">
            ✕
          </a>
        </li>
        {items.map(item => _navItems(item))}
      </ul>
    </nav>
  );
};
