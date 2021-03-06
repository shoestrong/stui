import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import { CheckboxGroupProps, CheckboxGroupContext, cssPrefix } from './index';
import './check-box-group.less';

export const GroupContext = React.createContext<CheckboxGroupContext>({
  disabled: false,
  checkedValue: [],
  onChecked: () => {},
});

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  className,
  style,
  children,
  disabled = false,
  onChange,
  value = [],
}) => {
  const [checkedValue, setCheckedValue] = useState<any[]>(value);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, value: any) => {
    const updateCheckedValue = e.target.checked
      ? [...checkedValue, value]
      : checkedValue.filter((v) => v !== value);
    setCheckedValue(updateCheckedValue);
    onChange && onChange(updateCheckedValue);
  };

  const context = {
    checkedValue,
    disabled,
    onChecked: handleChecked,
  };

  useEffect(() => {
    setCheckedValue(value);
  }, [value]);

  return (
    <div className={classNames(`${cssPrefix}-group`, className)} style={style}>
      <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
    </div>
  );
};

export default CheckboxGroup;
