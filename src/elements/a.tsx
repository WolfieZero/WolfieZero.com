import React from 'react';

import { Link } from 'framework';

interface Props {
  children: React.ReactNode;
  href: string;
  label?: string;
  className?: string;
  rel?: string;
  role?: string;
}

export const A = ({ children, className, rel, label, role = 'link', ...props }: Props): JSX.Element => {
  if (props.href.startsWith('http')) {
    return (
      <a {...props} aira-label={label} aira-role={role} className={className} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <Link {...props}>
      <a className={className} aira-label={label} aira-role={role}>
        {children}
      </a>
    </Link>
  );
};
