import clsxm from '@/lib/clsxm';

import * as Anchor from '@/components/Anchor';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';
import SocialIcons from '@/components/SocialIcons';

interface Props {
  className?: string;
}

export default function Footer(props: Props) {
  return (
    <div className={props.className}>
      <footer
        className={clsxm(
          'flex-wrap',
          'flex',
          'gap-x-10',
          'items-center',
          'justify-center',
          'max-w-[1728px]',
          'mx-auto',
          'px-4',
          'relative',
          'w-full',
          'sm:gap-x-40',
          'md:px-16',
          'md:justify-between'
        )}
      >
        <Logo />
        <div
          className={clsxm(
            'absolute',
            'flex-col',
            'flex',
            'items-center',
            'justify-center',
            'left-1/2',
            'top-1/2',
            '-translate-x-1/2',
            'translate-y-[60px]',
            'md:-translate-y-1/2'
          )}
        >
          <SocialIcons className='mb-5 sm:mb-10' />
          <div className='flex flex-wrap justify-center space-x-2 text-sm opacity-70'>
            <a href=''>© 2022 Realms</a>
            <span>|</span>
            <a href='https://solana.com/disclaimer'>Your Privacy</a>
            <span>|</span>
            <a href='https://solana.com/disclaimer'>Terms</a>
          </div>
        </div>
        {/* The buttons come with padding, but that ruins our nice
            alignment in the nav bar. We're going to slightly hack around
            that using negative margins instead.*/}
        <Anchor.Tertiary className='-mr-11' href='https://docs.realms.today/'>
          <Icon
            img='external-link-thin-white'
            className='mr-2'
            alt='External link icon'
          />{' '}
          Read the docs
        </Anchor.Tertiary>
      </footer>
    </div>
  );
}
