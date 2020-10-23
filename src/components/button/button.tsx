import { A } from 'elements';
import { classList } from 'helpers';

import style from './button.module.scss';

export interface ButtonProps {
  href: string;
  className?: App.ClassName;
  fill?: 'majority' | 'half' | 'some';
}

export const Button: React.FC<ButtonProps> = ({ children, href, className, fill, ...props }) => {
  if (fill) {
    className += ' ' + style[`Button__m_${fill}`];
  }
  return (
    <A href={href} className={classList([style.Button, className])} {...props}>
      {children}
    </A>
  );
};
