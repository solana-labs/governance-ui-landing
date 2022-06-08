import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';

import Card from './Card';
import ITEMS from './items';

interface Props {
  trackingContext: string;
}

export default function DAOStructures(props: Props) {
  return (
    <CenteredContent className='py-16 sm:py-20'>
      <Header
        as='h2'
        className={clsxm(
          'max-w-[325px]',
          'mb-16',
          'mx-auto',
          'text-center',
          'md:max-w-[498px]',
          'lg:mb-20',
          'lg:max-w-full',
          'xl:mb-16',
          '1_5xl:text-left'
        )}
      >
        Flexible structures for all DAO types
      </Header>
      <div
        className={clsxm(
          'flex-col',
          'flex',
          'gap-x-4',
          'gap-y-4',
          'items-start',
          '1_5xl:flex-wrap',
          '1_5xl:flex-row',
          '1_5xl:justify-center',
          '1_5xl:justify-between'
        )}
      >
        {ITEMS.map((item) => (
          <Card
            {...item}
            className={clsxm(
              '1_5xl:max-w-[400px]',
              'md:max-w-[700px]',
              'md:mx-auto',
              'w-full'
            )}
            key={item.bg}
            trackingContext={props.trackingContext}
          />
        ))}
      </div>
    </CenteredContent>
  );
}
