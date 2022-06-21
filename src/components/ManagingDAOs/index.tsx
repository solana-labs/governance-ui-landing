import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';

import CONFIG from './config';
import Section from './Section';

export default function ManagingDAOs() {
  const isNarrow = useMediaQuery({ query: `(max-width: 834px)` });
  const imgClass = isNarrow
    ? 'absolute -z-10 top-0 -left-[800px] bottom-0 -right-60 bg-[#201F27]'
    : 'absolute -z-10 h-full w-full bg-[#201F27]';

  return (
    <div className='relative overflow-hidden'>
      <div className={imgClass}>
        <Image
          className='w-full'
          alt='hero image'
          src='/assets/backgrounds/managing-dao.png'
          layout='fill'
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
