import React from 'react';

export const cssPrefix: string = 'st-checkbox';

export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
  value?: any;
}

export interface CheckboxGroupProps {
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (value: any[]) => void;
  value?: any[];
}

export interface CheckboxGroupContext {
  disabled: boolean;
  checkedValue: any[];
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>, value: any) => void;
}
