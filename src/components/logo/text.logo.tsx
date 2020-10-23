import React from 'react';

import { classList } from 'helpers';

import styles from './logo.module.scss';

export interface LogoTextProps {
  className: string;
}

export const LogoText: React.FC<LogoTextProps> = ({ className }) => (
  <p className={classList([styles.LogoText, className])}>Neil Sweeney</p>
);
