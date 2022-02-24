export interface DragProps {
  getCss: (ele: HTMLElement, prop: string) => number;
  onMouseDown: (e: MouseEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  onMouseUp: (e: MouseEvent) => void;
  init: () => void;
  remove: () => void;
  reset: () => void;
}

class Drag implements DragProps {
  drag: HTMLElement;
  wrap: HTMLElement;
  isCheckBody: boolean;
  initX: number;
  initY: number;
  moving: boolean;
  wrapLeft: number;
  wrapTop: number;
  wrapLeftDefault: number;
  wrapTopDefault: number;
  maxX: number;
  maxY: number;
  zIndex: number;

  constructor(
    drag: HTMLElement,
    wrap: HTMLElement,
    isCheckBody: boolean = false,
    zIndex: number = 99,
  ) {
    const { clientWidth, clientHeight } = document.body;
    this.drag = drag;
    this.wrap = wrap;
    this.zIndex = zIndex;
    this.isCheckBody = isCheckBody;
    this.initX = 0;
    this.initY = 0;
    this.moving = false;
    this.wrapLeft = this.wrapLeftDefault = this.getCss(this.wrap, 'left');
    this.wrapTop = this.wrapTopDefault = this.getCss(this.wrap, 'top');
    this.maxX = clientWidth - this.wrap.offsetWidth;
    this.maxY = clientHeight - this.wrap.offsetHeight;
  }

  getCss = (ele: HTMLElement, prop: any): number => {
    return parseInt(window.getComputedStyle(ele)[prop]);
  };

  onMouseDown = (e: MouseEvent): void => {
    this.moving = true;
    this.initX = e.clientX;
    this.initY = e.clientY;
  };

  onMouseMove = (e: MouseEvent): void => {
    if (!this.moving) {
      return;
    }
    let nowX = e.clientX,
      nowY = e.clientY,
      disX = nowX - this.initX,
      disY = nowY - this.initY,
      left = this.wrapLeft + disX,
      top = this.wrapTop + disY;
    this.wrap.style.left =
      left < 0
        ? '0px'
        : !this.isCheckBody
        ? left > this.maxX
          ? this.maxX + 'px'
          : left + 'px'
        : left + 'px';
    this.wrap.style.top =
      top < 0
        ? '0px'
        : !this.isCheckBody
        ? top > this.maxY
          ? this.maxY + 'px'
          : top + 'px'
        : top + 'px';
    this.wrap.style.zIndex = String(this.zIndex);
    this.wrap.style.boxShadow = '0px 0px 5px rgba(0,0,0,0.1)';
  };

  onMouseUp = (e: MouseEvent): void => {
    this.moving = false;
    this.wrapLeft = this.getCss(this.wrap, 'left');
    this.wrapTop = this.getCss(this.wrap, 'top');
    this.wrap.style.boxShadow = 'none';
  };

  init = (): void => {
    this.drag.addEventListener('mousedown', this.onMouseDown, false);
    document.addEventListener('mousemove', this.onMouseMove, false);
    document.addEventListener('mouseup', this.onMouseUp, false);
  };

  remove = (): void => {
    this.drag.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  reset = (): void => {
    this.wrapLeft = this.wrapLeftDefault;
    this.wrapTop = this.wrapTopDefault;
    this.wrap.style.left = this.wrapLeftDefault + 'px';
    this.wrap.style.top = this.wrapTopDefault + 'px';
  };
}

export default Drag;
