import React from 'react';

import clsxm from '@/lib/clsxm';

import { BASE_STYLES } from '@/styles/buttons';

export function createFactory<P extends { className?: string }>(tag: string) {
  return (customStyles: string) => {
    return (props: P) => {
      const { className, ...rest } = props;

      return React.createElement(tag, {
        className: clsxm(customStyles, className, BASE_STYLES),
        ...rest,
      });
    };
  };
}

export const createAnchor =
  createFactory<React.AnchorHTMLAttributes<HTMLAnchorElement>>('a');

export const createButton =
  createFactory<React.ButtonHTMLAttributes<HTMLButtonElement>>('button');
