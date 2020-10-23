import { classList } from 'helpers';

import styles from './asset.module.scss';

export interface AssetGroupProps {
  className?: App.ClassName;
}

export const AssetGroup: React.FC<AssetGroupProps> = ({ children, className, ...props }) => {
  return (
    <div className={classList([styles['AssetGroup'], className])} {...props}>
      {children}
    </div>
  );
};
