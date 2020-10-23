import { classList } from 'helpers';

import style from './button.module.scss';

export interface ButtonGroupProps {
  className?: App.ClassName;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className }) => (
  <div className={classList([style.ButtonGroup, className])}>{children}</div>
);
