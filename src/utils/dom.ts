export const toggleBodyOverflow = (toggle: boolean = true): void => {
  document.body.style.overflow = toggle ? 'hidden' : null;
};

export const logError = (str = '') => {
  console.error(str);
};

export const logWarning = (str = '') => {
  console.warn(str);
};

export const isArray = (target: any): boolean => {
  return Object.prototype.toString.call(target) === '[object Array]';
};

export const getScrollbarSize = () => {
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  document.body.appendChild(div);
  const scrollBarX = div.offsetWidth - div.clientWidth;
  const scrollBarY = div.offsetHeight - div.clientHeight;
  document.body.removeChild(div);
  return {
    scrollBarX,
    scrollBarY,
  };
};

export const addClass = (el: HTMLElement, name: string) => {
  if (!el || !name) {
    return;
  }
  if (!el.className) {
    el.className = name;
    return;
  }
  el.className = `${el.className} ${name}`;
};

export const removeClass = (el: HTMLElement, name: string) => {
  if (!el || !name) {
    return;
  }
  if (!el.className) {
    return;
  }
  const classNameList = el.className
    .split(' ')
    .map((name) => name)
    .filter((v) => v !== name);
  el.className = classNameList.length <= 0 ? '' : classNameList.join(' ');
};
