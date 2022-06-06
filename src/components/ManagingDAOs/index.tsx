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
      <CenteredContent>
        <article className='py-32'>
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
              'flex-wrap',
              'flex',
              'flex-row',
              'gap-x-8',
              'gap-y-16',
              'items-start',
              'justify-center',
              'xl:justify-between'
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
