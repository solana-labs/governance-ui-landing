import clsxm from '@/lib/clsxm';

import Header from '@/components/Header';

export interface Props {
  alignment: 'left' | 'right';
  className?: string;
  extra?: React.ReactNode;
  index: number;
  image: string;
  text: string;
  title: React.ReactNode;
}

export default function Section(props: Props) {
  return (
    <section
      className={clsxm(
        props.className,
        'flex-col',
        'flex',
        'items-center',
        'xl:items-start',
        props.alignment === 'right' ? 'xl:flex-row' : 'xl:flex-row-reverse'
      )}
    >
      <div
        className={clsxm(
          'w-full',
          'h-[375px]',
          'relative',
          'sm:mx-0',
          'sm:h-[610px]',
          'sm:w-[799px]'
        )}
      >
        <div
          className={clsxm(
            '-translate-y-1/2',
            '-translate-x-1/2',
            'absolute',
            'bg-center',
            'bg-cover',
            'block',
            'h-[375px]',
            'left-1/2',
            'top-1/2',
            'w-[445px]',
            '-z-10',
            'sm:h-[672px]',
            'sm:w-[799px]'
          )}
          style={{ backgroundImage: `url(${props.image})` }}
        />
      </div>
      <div
        className={clsxm(
          'flex',
          'items-start',
          'gap-x-3',
          '-mt-20',
          'px-5',
          'sm:-mt-48',
          'xl:mt-24',
          props.alignment === 'right' ? 'xl:-ml-8' : 'xl:-mr-8'
        )}
      >
        <div
          className={clsxm(
            'grid',
            'place-items-center',
            'bg-[#201F27]',
            'h-9',
            'rounded-full',
            'shrink-0',
            'w-9',
            'sm:h-14',
            'sm:w-14'
          )}
        >
          <Header
            as='h3'
            withGradientPurple={props.alignment === 'right'}
            withGradientBlue={props.alignment === 'left'}
          >
            {props.index}
          </Header>
        </div>
        <div className='mt-1 sm:mt-3'>
          <Header as='h3'>{props.title}</Header>
          <div
            className={clsxm(
              'block',
              'max-w-[500px]',
              'mt-4',
              'opacity-50',
              'text-base'
            )}
          >
            {props.text}
          </div>
          {props.extra && <div className='mt-10'>{props.extra}</div>}
        </div>
      </div>
    </section>
  );
}
