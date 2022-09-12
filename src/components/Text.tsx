import { createElement } from 'react';

type TextProps = {
  as?: string;
  isBold?: boolean;
  withOpacity?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function Text({
  as = 'p2',
  className = '',
  isBold = false,
  withOpacity = false,
  children,
}: TextProps) {
  let classNames = '';
  if (as === 'p1') {
    classNames += ` text-lg`;
  } else if (as === 'p2') {
    classNames += ` text-base`;
  } else if (as === 'p3') {
    classNames += ` text-xs`;
  }

  classNames += ` ${className}`;

  if (isBold) {
    classNames += ` font-bold`;
  } else if (withOpacity) {
    classNames += ` opacity-70`;
  }

  return createElement('div', { className: classNames }, children);
}
