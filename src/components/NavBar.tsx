import Link from 'next/link';

import clsxm from '@/lib/clsxm';
import usePageScrollPos from '@/hooks/usePageScrollPos';

import * as Anchor from '@/components/Anchor';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

// The navbar doesn't start at the top. Instead, at rest, it is offset. As the
// user scrolls up, the navbar will lock into place.
const OFFSET = 40;

// As the user scrolls, at some point the CTA in the navbar will switch from
// "read the docs" to "open app". This is the point at which that happens.
const BUTTON_BREAKPOINT = 540;

export default function NavBar() {
  const pageScrollPosition = usePageScrollPos();
  const opacity = Math.min(OFFSET, pageScrollPosition) / OFFSET;

  return (
    <div
      className={clsxm('fixed', 'w-full', 'z-10', 'backdrop-blur-[3px]')}
      style={{
        background: `rgba(41, 40, 51, ${opacity})`,
        // Let the nav bar scroll up until it "locks" into its final position
        top: Math.max(-OFFSET, -pageScrollPosition),
      }}
    >
      <div
        className={clsxm(
          'flex',
          'items-center',
          'justify-between',
          'max-w-[1728px]',
          'mx-auto',
          'pb-4',
          'pt-14',
          'px-4',
          'md:px-16',
          'w-full'
        )}
      >
        <Logo />
        <div className='relative h-full'>
          <div
            className={clsxm(
              pageScrollPosition < BUTTON_BREAKPOINT
                ? 'opacity-100'
                : 'opacity-0',
              'duration-300',
              'transition-opacity'
            )}
          >
            {/* The buttons come with padding, but that ruins our nice
                alignment in the nav bar. We're going to slightly hack around
                that using negative margins instead. The left margin on the
                button is to maintain the container size. Since the other
                button is absolutely positioned, it depends on the container
                width to rendered correctly */}
            <Anchor.Tertiary className='-mr-11 ml-11' href=''>
              <Icon
                img='external-link-thin-white'
                className='mr-2'
                alt='External link icon'
              />{' '}
              Read the docs
            </Anchor.Tertiary>
          </div>
          {/* This button is absolutely positioned over the previous one to
              make for a slicker transition when one button dissapears and the
              other appears. */}
          <div
            className={clsxm(
              pageScrollPosition > BUTTON_BREAKPOINT
                ? 'opacity-100'
                : 'opacity-0',
              pageScrollPosition > BUTTON_BREAKPOINT
                ? 'pointer-events-auto'
                : 'pointer-events-none',
              'absolute',
              'duration-300',
              'h-full',
              'r-0',
              'right-0',
              'top-0',
              'transition-opacity'
            )}
          >
            <Link href='' passHref>
              <Anchor.Gradient>
                Enter App{' '}
                <Icon className='ml-2' img='arrow-thin-black' alt='Arrow' />
              </Anchor.Gradient>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
