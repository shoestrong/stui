import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import './index.less';
import varStyle from '../../utils/varStyle';

export interface MessageProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  top?: string;
  zIndex?: number;
  duration?: number;
  type?: 'primary' | 'warning' | 'danger' | 'default' | 'success';
  content?: React.ReactNode;
  list?: Array<MessageProps>;
  messageId?: string;
  onEnd?: (messageId: string) => void;
  plain?: boolean;
}

interface MessageItemProps {
  record?: MessageProps;
  onEnd?: (messageId: string) => void;
}

interface IMessage {
  show: (opt?: string | MessageProps) => void;
}

const cssPrefix: string = 'st-message';
const MessageComp: FC<MessageProps> = ({
  top = '0px',
  zIndex = varStyle.messageZIndex,
  list,
  onEnd,
}) => {
  const [messageList, setMessageList] = useState<Array<MessageProps>>(list as Array<MessageProps>);

  useEffect(() => {
    setMessageList(list as Array<MessageProps>);
  }, [list]);

  return (
    <div className={cssPrefix} style={{ top, zIndex }}>
      <div className={`${cssPrefix}-info`}>
        {messageList.map((item) => (
          <MessageItem
            data-msg-id={item.messageId}
            onEnd={onEnd}
            key={item.messageId}
            record={item}
          />
        ))}
      </div>
    </div>
  );
};
const MessageItem: FC<MessageItemProps> = ({ record = {}, onEnd }) => {
  let timer: any;

  const { duration, messageId, type, className, style, content, plain } = record;

  const setTimer = (): void => {
    timer = setTimeout(() => {
      messageId && onEnd && onEnd(messageId);
    }, duration);
  };
  const removeTimer = (): void => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const onMouseEnter = (e: React.MouseEvent) => removeTimer();
  const onMouseLeave = (e: React.MouseEvent) => setTimer();

  useEffect(() => {
    setTimer();
    return () => {
      removeTimer();
      messageId && onEnd && onEnd(messageId);
    };
  }, []);

  return (
    <div
      className={classNames(
        `${cssPrefix}-info-item`,
        `${cssPrefix}-info${!!plain ? '-plain' : ''}-${type}`,
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-msg-id={messageId}
      style={style}
    >
      <div className={classNames(`${cssPrefix}-info-item-content`)}>
        <span />
        {content}
      </div>
    </div>
  );
};

let div: HTMLElement;
let messageList: Array<MessageProps> = [];
const Message: IMessage = {
  show: (opt = '') => {
    if (!div) {
      div = document.createElement('div');
      document.body.appendChild(div);
    }
    let config: MessageProps = {};
    if (typeof opt === 'object') {
      config = opt;
      config.type = config.type || 'primary';
      config.duration = config.duration || 3000;
    } else {
      config.type = 'primary';
      config.content = opt;
      config.duration = 3000;
    }
    config.messageId = new Date().getTime() + '';

    messageList = [...messageList, config];

    const handleRemove = (messageId: string) => {
      messageList = messageList.filter((v) => v.messageId !== messageId);
      ReactDOM.render(<MessageComp list={messageList} onEnd={handleRemove} />, div);
    };

    ReactDOM.render(<MessageComp list={messageList} onEnd={handleRemove} />, div);
  },
};

export default Message;
