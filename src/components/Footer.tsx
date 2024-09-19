import Link from 'next/link';

import clsxm from '@/lib/clsxm';
import trackClick from '@/lib/trackClick';

import * as Anchor from '@/components/Anchor';
import Icon from '@/components/Icon';
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
        <div />
        <div
          className={clsxm(
            'absolute',
            'flex-col',
            'flex',
            'gap-2',
            'items-center',
            'justify-center',
            'left-1/2',
            'pb-4',
            'top-1/2',
            '-translate-x-1/2',
            'translate-y-[60px]',
            'md:pb-0',
            'md:-translate-y-1/2',
            'w-fit'
          )}
        >
          <div
            className={clsxm(
              'flex',
              'flex-col',
              'items-center',
              'justify-center'
            )}
          >
            <SocialIcons className='mb-5' trackingContext='footer' />
            <div className='flex justify-center space-x-2 text-sm opacity-70'>
              <div className='whitespace-nowrap'>
                © 2024 The Realms Today Trust
              </div>
              {/**
               * We aren't going to include the privacy policy for now
               * <span>|</span>
               * <a href='https://solana.com/disclaimer'>Your Privacy</a>
               */}
              <span>|</span>
              <Link className='whitespace-nowrap' href='/terms' passHref>
                <a onClick={() => trackClick('terms', 'footer')}>Terms</a>
              </Link>
              <span>|</span>
              <Link
                className='whitespace-nowrap'
                href='/privacy-policy'
                passHref
              >
                <a onClick={() => trackClick('privacy', 'footer')}>
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>
          <div className='opacity-70'>
            Powered by <span className='font-bold'>Solana</span>
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
