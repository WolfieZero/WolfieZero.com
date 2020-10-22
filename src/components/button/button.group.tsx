import { classList } from 'helpers';

import style from './button.module.scss';

interface ButtonGroupProps {
  className?: App.ClassName;
}

export const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({ children, className }) => {
  return <div className={classList([style.ButtonGroup, className])}>{children}</div>;
};
