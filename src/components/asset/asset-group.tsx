import { classList } from 'helpers';

import styles from './asset.module.scss';

type AssetGroupProps = {
  className?: App.ClassName;
};

export const AssetGroup: React.FunctionComponent<AssetGroupProps> = ({ children, className, ...props }) => {
  return (
    <div className={classList([styles['AssetGroup'], className])} {...props}>
      {children}
    </div>
  );
};
