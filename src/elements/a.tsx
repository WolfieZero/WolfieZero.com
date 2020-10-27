import React from 'react';

import NextLink from 'next/link';

export interface AProps {
  children: React.ReactNode;
  href: string;
  label?: string;
  className?: string;
  rel?: string;
  role?: string;
}

export const A: React.FC<AProps> = ({ children, className, rel, label, role = 'link', ...props }) => {
  if (props.href.startsWith('http')) {
    return (
      <a {...props} aira-label={label} aira-role={role} className={className} rel={rel} data-location="external">
        {children}
      </a>
    );
  }
  return (
    <NextLink {...props}>
      <a className={className} aira-label={label} aira-role={role} data-location="internal">
        {children}
      </a>
    </NextLink>
  );
};
