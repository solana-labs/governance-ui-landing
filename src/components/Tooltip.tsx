import React from 'react';

import clsxm from '@/lib/clsxm';

interface Props {
  children: JSX.Element;
  text: string;
}

export default function Tooltip(props: Props) {
  const child = React.Children.only(props.children);

  return React.cloneElement(child, {
    'data-content': props.text,
    className: clsxm(
      child.props.className,
      'relative',
      'hover:after:block',
      'hover:before:block',
      'after:-mt-[50px]',
      'after:-translate-x-1/2',
      'after:absolute',
      'after:bg-black',
      'after:content-[attr(data-content)]',
      'after:hidden',
      'after:left-1/2',
      'after:px-3',
      'after:py-2',
      'after:rounded',
      'after:text-white',
      'after:top-0',
      'after:whitespace-pre',
      'after:z-20',
      'before:-mt-[20px]',
      'before:-translate-x-1/2',
      'before:absolute',
      'before:bg-black',
      "before:content-[' ']",
      'before:h-[16px]',
      'before:hidden',
      'before:left-1/2',
      'before:rotate-45',
      'before:top-0',
      'before:w-[16px]',
      'before:z-20'
    ),
  });
}
