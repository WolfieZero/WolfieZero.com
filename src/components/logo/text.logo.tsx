import React from 'react';

import { classList } from 'helpers';

import styles from './logo.module.scss';

interface Props {
  className: string;
}

export const LogoText = ({ className }: Props): JSX.Element => (
  <p className={classList([styles.LogoText, className])}>Neil Sweeney</p>
);
