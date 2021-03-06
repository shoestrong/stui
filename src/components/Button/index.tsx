import React, { FC } from 'react';
import classNames from 'classnames';
// import Spinner from '../Spinner';
import './index.less';

export interface ButtonProps {
  type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
  disabled?: boolean;
  block?: boolean;
  plain?: boolean;
  size?: 'normal' | 'large' | 'small';
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

const cssPrefix: string = 'st-button';
const Button: FC<ButtonProps> = ({
  children,
  type = 'primary',
  disabled = false,
  block = false,
  plain = false,
  size = 'normal',
  loading = false,
  onClick,
}) => (
  <button
    className={classNames([
      cssPrefix,
      `${cssPrefix}${plain ? '-plain' : ''}-${type}`,
      `${cssPrefix}-${size}`,
      disabled ? `${cssPrefix}-disabled` : '',
      block ? `${cssPrefix}-block` : '',
      loading ? `${cssPrefix}-loading` : '',
    ])}
    onClick={loading || disabled ? undefined : onClick}
    disabled={disabled}
  >
    {/* {loading && <Spinner color="#fff" style={{ padding: '4% 4px 0 0' }} />} */}
    <span className={`${cssPrefix}-info`}>{children}</span>
  </button>
);

export default Button;
