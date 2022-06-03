import Image from 'next/image';
import Link from 'next/link';

import * as Anchor from '@/components/Anchor';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import CenteredContent from '@/components/layout/CenteredContent';
import Text from '@/components/Text';

interface Props {
  className?: string;
}

export default function Introduction(props: Props) {
  return (
    <CenteredContent className={props.className}>
      <Image
        className='-z-10 w-full'
        alt='hero image'
        src='/backgrounds/landing-hero-desktop.png'
        layout='fill'
        objectFit='cover'
      />
      <article className='pt-[245px] pb-[200px]'>
        <div className='max-w-screen-lg'>
          <Header as='h1'>
            Tooling to help your community thrive on Solana
          </Header>
        </div>
        <div className='mt-4 mb-11 w-full max-w-[679px] md:mb-14 md:text-left xl:w-2/3'>
          <Text as='p1' withOpacity>
            DAO creation, voting, and treasury management, all in one fully
            on-chain product. Whether managing a multisig or a billion dollar
            protocol, Realms has the tools and integrations to enable your
            community to reach its full potential.
          </Text>
        </div>
        <div className='flex flex-col items-center gap-4 sm:flex-row'>
          <Link href='' passHref>
            <Anchor.Gradient>
              Enter App{' '}
              <Icon className='ml-2' img='arrow-thin-black' alt='Arrow' />
            </Anchor.Gradient>
          </Link>
          <Link href='' passHref>
            <Anchor.Secondary>Create a DAO</Anchor.Secondary>
          </Link>
          <Link href='' passHref>
            <Anchor.Tertiary className='block sm:hidden'>
              <Icon
                img='external-link-thin-white'
                className='mr-2'
                alt='External link icon'
              />{' '}
              Read the docs
            </Anchor.Tertiary>
          </Link>
        </div>
      </article>
    </CenteredContent>
  );
}
