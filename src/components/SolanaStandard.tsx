import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import clsxm from '@/lib/clsxm';
import trackClick from '@/lib/trackClick';

import * as Anchor from '@/components/Anchor';
import Header from '@/components/Header';
import Icon from '@/components/Icon';

export default function SolanaStandard() {
  const isNarrow = useMediaQuery({ query: `(max-width: 834px)` });

  return (
    <div className='w-full sm:px-[64px] md:px-[90px]'>
      <div
        className={clsxm(
          'mx-auto',
          'overflow-hidden',
          'relative',
          'w-full',
          'py-9',
          'px-[20px]',
          'sm:px-16',
          'sm:py-12',
          'sm:rounded-md',
          'md:max-w-[1538px]',
          'md:px-24',
          'md:py-16',
          'lg:px-28',
          'lg:py-20'
        )}
      >
        <div className='absolute top-0 left-0 bottom-0 right-0 -z-10'>
          <Image
            alt='background'
            src={
              isNarrow
                ? '/assets/backgrounds/spl-gov-mobile.png'
                : '/assets/backgrounds/spl-gov-desktop.png'
            }
            layout='fill'
          />
        </div>
        <div className='mb-10 flex items-center text-base sm:mb-8 md:mb-16'>
          The
          <img
            src='/icons/logo-solana-text.png'
            className='mx-2 h-4'
            alt='solana'
          />
          Standard
        </div>
        <Header as='h2' className='mb-3 md:mb-4 lg:mb-6'>
          <span className='inline-block'>Powered by&nbsp;</span>
          <span className='inline-block'>SPL Governance</span>
        </Header>
        <div className='mb-9 block max-w-[806px] text-sm sm:text-base'>
          SPL Governance is a program which provides core building blocks and
          primitives to create Decentralized Autonomous Organizations (DAOs) on
          the Solana blockchain.
          <br />
          <br />
          The program is DAO type and asset type agnostic and can be used to
          build any type of DAOs which can own and manage any type of assets.
        </div>
        <div className='flex'>
          <Anchor.Secondary
            href='https://github.com/solana-labs/solana-program-library/tree/master/governance'
            onClick={() => trackClick('about_spl', 'index_solana_standard')}
          >
            <Icon
              img='external-link-thin-white'
              className='mr-4 transition-all group-hover:invert group-focus:invert'
              alt='External link icon'
            />
            About SPL Governance
          </Anchor.Secondary>
        </div>
      </div>
    </div>
  );
}
