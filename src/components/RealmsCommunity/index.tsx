import Image from 'next/image';

import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';

import ITEMS from './items';
import Section from './Section';

export default function RealmsCommunity() {
  return (
    <div className='relative overflow-hidden'>
      <div
        className={clsxm(
          '-translate-x-1/2',
          '-z-10',
          'absolute',
          'h-[129px]',
          'left-1/2',
          'top-0',
          'w-[1728px]'
        )}
      >
        <Image
          className='w-full'
          alt='divider'
          src='/assets/backgrounds/divider-glow.png'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <CenteredContent className='py-24'>
        <Header
          as='h1'
          className='mx-auto mb-20 max-w-[875px] px-5 text-center'
        >
          Using Realms to power your community
        </Header>
        <div
          className={clsxm(
            '-mb-8',
            'flex-col',
            'flex',
            'items-center',
            'space-y-12',
            'xl:-space-y-0'
          )}
        >
          {ITEMS.map((item) => (
            <Section {...item} key={item.image} />
          ))}
        </div>
      </CenteredContent>
    </div>
  );
}
