import React from 'react';
import Select from './Select';

export interface SelectBaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  multiple?: boolean;
  disabled?: boolean;
}
export interface SelectProps extends SelectBaseProps {
  defaultValue?: any;
  size?: 'normal' | 'small' | 'large';
  onChange?: (value: any) => void;
}
export interface SelectItemProps extends SelectBaseProps {
  value?: any;
  actualValue?: any;
  onClick?: (value: any, e: React.MouseEvent) => void;
  updateActualValue?: (val: any) => void;
}

export default Select;
