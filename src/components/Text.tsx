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
  let classNames = 'landing-page';
  //font-light
  if (as === 'p1') {
    classNames += ` text-base`;
  } else if (as === 'p2') {
    classNames += ` text-sm`;
  } else if (as === 'p3') {
    classNames += ` text-xs`;
  }

  classNames += ` ${className}`;

  if (isBold) {
    classNames += ` font-bold`;
  } else if (withOpacity) {
    classNames += ` opacity-70`;
  }

  return createElement(as, { className: classNames }, children);
}
