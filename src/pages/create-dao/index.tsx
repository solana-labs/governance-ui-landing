import clsxm from '@/lib/clsxm';
import usePageViewTracking from '@/hooks/usePageViewTracking';

import CenteredContent from '@/components/CenteredContent';
import Card from '@/components/DAOStructures/Card';
import ITEMS from '@/components/DAOStructures/items';
import Header from '@/components/Header';
import Logo from '@/components/Logo';

export default function CreateDaoPage() {
  usePageViewTracking('create');

  return (
    <div className='landing-page bg-background'>
      <div
        className={clsxm('fixed', 'w-full', 'z-20')}
        style={{
          background: `rgba(41, 40, 51, 0.8)`,
          backdropFilter: `blur(20px)`,
          WebkitBackdropFilter: `blur(20px)`,
        }}
      >
        <div
          className={clsxm(
            'flex',
            'items-center',
            'justify-between',
            'max-w-[1728px]',
            'mx-auto',
            'py-8',
            'px-4',
            'md:px-8',
            'lg:px-16',
            'w-full'
          )}
        >
          <Logo />
        </div>
      </div>
      <CenteredContent className='px-5 pt-52 pb-6'>
        <Header
          as='h2'
          className={clsxm(
            'max-w-[325px]',
            'mb-16',
            'md:max-w-[579px]',
            'lg:mx-auto',
            'lg:mb-20',
            'xl:mb-16',
            '1_5xl:mx-0'
          )}
        >
          What type of DAO would you like to create?
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
            '1_5xl:justify-between'
          )}
        >
          {ITEMS.map((item) => (
            <Card
              {...item}
              className={clsxm(
                'w-full',
                'z-10',
                'md:max-w-[700px]',
                'md:mx-auto',
                '1_5xl:w-[calc(33%-16px)]'
              )}
              key={item.bg}
              trackingContext='create_dao_structures'
            />
          ))}
        </div>
      </CenteredContent>
    </div>
  );
}
