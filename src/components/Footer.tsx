import clsxm from '@/lib/clsxm';
import trackClick from '@/lib/trackClick';

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
          'justify-between',
          'mx-auto',
          'relative',
          'w-full',
          'md:max-w-[1548px]'
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
            'sm:-translate-y-1/2'
          )}
        >
          <SocialIcons
            className='mb-5 mt-0 sm:mt-16 sm:mb-10'
            trackingContext='footer'
          />
          <div className='flex flex-wrap justify-center space-x-2 text-sm opacity-70'>
            <div>© 2022 Realms</div>
            {/**
             * We aren't going to include the privacy policy for now
             * <span>|</span>
             * <a href='https://solana.com/disclaimer'>Your Privacy</a>
             */}
            <span>|</span>
            <a
              href='https://solana.com/disclaimer'
              onClick={() => trackClick('terms', 'footer')}
            >
              Terms
            </a>
          </div>
        </div>
        {/* The buttons come with padding, but that ruins our nice
            alignment in the footer. We're going to slightly hack around
            that using negative margins instead. To prevent these margins from
            introducing overflow and affecting the parent width, we're going
            to wrap it in a div and set overflow to be hidden. */}
        <div className='overflow-hidden'>
          <Anchor.Tertiary
            className='-mr-11'
            href='https://docs.realms.today/'
            onClick={() => trackClick('read_docs', 'footer')}
          >
            <Icon
              img='external-link-thin-white'
              className='mr-2'
              alt='External link icon'
            />{' '}
            Read the docs
          </Anchor.Tertiary>
        </div>
      </footer>
    </div>
  );
}
