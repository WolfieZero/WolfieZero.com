import React from 'react';
import { classList } from 'helpers';

import style from './logo.module.scss';

interface Props {
  className: string;
}

export const LogoStar = ({ className }: Props): JSX.Element => {
  return (
    <svg
      width="53"
      height="56"
      viewBox="0 0 53 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classList([style.LogoStar, className])}
    >
      <path
        d="M0 28L20.0385 21.4891L20.0385 0.419361L32.423 17.4651L52.4615 10.9542L40.077 28L52.4615 45.0458L32.423 38.5349L20.0385 55.5806L20.0385 34.5109L0 28Z"
        fill="#831C85"
      />
    </svg>
  );
};
