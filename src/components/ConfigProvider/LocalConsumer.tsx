import { FC, useContext, useState, useEffect } from 'react';
import { ConfigContext } from './index';
import defaultLocal from '../../local/zh-CN';
import { ILocal } from '../../local';

interface LocalConsumerProps {
  componentName?: string;
}

const LocalConsumer: FC<LocalConsumerProps> = ({ componentName = 'global', children }) => {
  const context = useContext(ConfigContext);
  const [local, setLocal] = useState<ILocal>(
    context && context.local ? context.local : defaultLocal,
  );
  //@ts-ignore
  const localComp = local[componentName];

  useEffect(() => {
    setLocal(context && context.local ? context.local : defaultLocal);
  }, [context]);

  //@ts-ignore
  return children(localComp, local);
};

export default LocalConsumer;
