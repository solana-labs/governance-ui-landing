import Image from 'next/image';

import clsxm from '@/lib/clsxm';

import * as Anchor from '@/components/Anchor';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import Text from '@/components/Text';

interface Props {
  bg: string;
  bgAlignment: 'left' | 'center' | 'right';
  className?: string;
  content: string;
  cta: {
    href: string;
    text: string;
  };
  daos: {
    icons: string[];
    text: string;
  };
  title: React.ReactNode;
}

export default function Card(props: Props) {
  return (
    <article
      className={clsxm(
        props.className,
        'overflow-hidden',
        'p-8',
        'relative',
        'rounded-md'
      )}
    >
      <div
        className={clsxm(
          '-z-10',
          'absolute',
          'bottom-0',
          'h-[450px]',
          'w-[800px]',
          props.bgAlignment === 'left' && 'left-0',
          props.bgAlignment === 'right' && 'right-0',
          props.bgAlignment === 'center' && 'left-1/2',
          props.bgAlignment === 'center' && '-translate-x-1/2'
        )}
      >
        <Image alt='background' layout='fill' src={props.bg} />
      </div>
      <div className='mb-5 flex items-center lg:min-h-[98px]'>
        <Header as='h3'>{props.title}</Header>
      </div>
      <Text withOpacity as='p1' className='block max-w-[489px] pb-8'>
        {props.content}
      </Text>
      <div className='mb-6 flex items-center gap-3'>
        <div className='flex -space-x-3'>
          {props.daos.icons.map((src) => (
            <img alt='icon' className='h-10 w-10' key={src} src={src} />
          ))}
        </div>
        <div className='max-w-[205px] text-xs opacity-50'>
          {props.daos.text}
        </div>
      </div>
      <Anchor.Dark
        className='w-full max-w-[356px] justify-between'
        href={props.cta.href}
      >
        {props.cta.text}{' '}
        <Icon
          img='arrow-thin-blue'
          className={clsxm(
            'ml-4',
            'transition-all',
            'group-focus:brightness-0',
            'group-hover:brightness-0'
          )}
          alt='Arrow'
        />
      </Anchor.Dark>
    </article>
  );
}
