import classNames from 'classnames';
import type { ReactComponentLike } from 'prop-types';

import styles from './Asset.module.css';

export interface AssetProps {
  /**
   * @param {string} description Used to force populate aria-label attribute
   */
  description: string;

  /**
   * @param {string} className Classname to be added to SVG element
   */
  className?: string;

  /**
   * @param {ReactComponentLike} icon SVG Icon Component to render
   */
  icon: ReactComponentLike;

  /**
   * @param {string} [role='img'] Role attribute of SVG element
   */
  role?: string;

  /**
   * @param {string} height Height attribute of SVG element
   */
  height: number;

  /**
   * @param {string} width Width attribute of SVG element
   */
  width: number;
}

export const Asset = ({
  description,
  className,
  role = 'img',
  icon: Element,
  ...rest
}: AssetProps): JSX.Element => {
  const props = {
    role,
    ...rest,
    'aria-label': description
  };

  return <Element {...props} className={classNames(styles.asset, className)} />;
};
