import Image from 'next/image';

import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';

import CONFIG from './config';
import Section from './Section';

export default function ManagingDAOs() {
  return (
    <div className='relative'>
      <div className='absolute -z-10 h-full w-full bg-[#201F27]'>
        <Image
          className='w-full'
          alt='hero image'
          src='/backgrounds/managing-dao.png'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <CenteredContent className='px-5'>
        <article className='xm:py-36 py-24'>
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
              'xl:text-left'
            )}
          >
            Managing your DAO on Realms
          </Header>
          <div
            className={clsxm(
              'grid',
              'items-start',
              'place-items-center',
              'gap-y-16',
              'md:grid-cols-2',
              'md:gap-x-24',
              'xl:grid-cols-3',
              '1_5xl:gap-x-40'
            )}
          >
            {CONFIG.map((section) => (
              <Section {...section} key={section.icon} />
            ))}
          </div>
        </article>
      </CenteredContent>
    </div>
  );
}
