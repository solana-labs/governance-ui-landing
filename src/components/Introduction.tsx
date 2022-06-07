import Image from 'next/image';
import Link from 'next/link';

import * as Anchor from '@/components/Anchor';
import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import Text from '@/components/Text';

export default function Introduction() {
  return (
    <div className='relative'>
      <div className='absolute -top-[275px] left-1/2 -z-10 h-[844px] w-[1800px] -translate-x-[1072px]'>
        <Image
          className='w-full'
          alt='hero image'
          src='/backgrounds/landing-hero-desktop.png'
          layout='fill'
        />
      </div>
      <CenteredContent>
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
            <Anchor.Gradient href='https://app.realms.today'>
              Enter App
              <Icon className='ml-2' img='arrow-thin-black' alt='Arrow' />
            </Anchor.Gradient>
            <Link href='/create-dao' passHref>
              <Anchor.Secondary>Create a DAO</Anchor.Secondary>
            </Link>
            <Anchor.Tertiary
              className='block sm:hidden'
              href='https://docs.realms.today/'
            >
              <Icon
                img='external-link-thin-white'
                className='mr-2'
                alt='External link icon'
              />{' '}
              Read the docs
            </Anchor.Tertiary>
          </div>
        </article>
      </CenteredContent>
    </div>
  );
}
