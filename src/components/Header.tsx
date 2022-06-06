import { createElement } from 'react';

type HeaderProps = {
  as?: string;
  withGradientBlue?: boolean;
  withGradientPurple?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export default function Header({
  as = 'h2',
  withGradientBlue = false,
  withGradientPurple = false,
  className = '',
  children,
}: HeaderProps) {
  let classNames = '';
  if (as === 'h1') {
    classNames += ` heading-xl font-light`;
  } else if (as === 'h2') {
    classNames += ` heading-lg font-light`;
  } else if (as === 'h3') {
    classNames += ` heading-md font-light`;
  } else if (as === 'h4') {
    classNames += ` heading-sm font-bold`;
  } else if (as === 'h5') {
    className += ` heading-xs font-bold`;
  } else if (as === 'h6') {
    className += ` heading-cta font-bold`;
  }

  classNames += ` ${className}`;

  if (withGradientBlue) {
    classNames += ` bg-gradient-to-tr from-[#87F2FF] to-[#00C2FF] bg-clip-text text-transparent`;
  } else if (withGradientPurple) {
    classNames += ` bg-gradient-to-tr from-[#e465b9] to-[#a984f8] bg-clip-text text-transparent`;
  }

  return createElement(as, { className: classNames }, children);
}
