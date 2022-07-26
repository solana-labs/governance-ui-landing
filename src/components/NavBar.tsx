import { createAnchor } from '@/lib/buttons';
import clsxm from '@/lib/clsxm';
import trackClick from '@/lib/trackClick';
import usePageScrollPos from '@/hooks/usePageScrollPos';

import * as Anchor from '@/components/Anchor';
import Icon from '@/components/Icon';
import Logo from '@/components/Logo';

const SmallGradientAnchor = createAnchor(
  clsxm(
    'border-none',
    'bg-gradient-to-r',
    'from-[#00C2FF]',
    'opacity-[.84]',
    'px-6',
    'py-4',
    'text-black',
    'to-[#87F2FF]',
    'transition-to-white-background',
    'via-[#00E4FF]',
    'active:opacity-70',
    'hover:opacity-100',
    'sm:px-11',
    'sm:py-5'
  )
);

// The distance the user needs to scroll in order for the nav bar to go from
// being transparent to solid.
const OFFSET = 100;

// The maximum backdrop blur
const BLUR = 20;

const MAX_OPACITY = 0.8;

// As the user scrolls, at some point the CTA in the navbar will switch from
// "read the docs" to "open app". This is the point at which that happens.
const BUTTON_BREAKPOINT = 500;

export default function NavBar() {
  const pageScrollPosition = usePageScrollPos();
  const progress = Math.min(OFFSET, pageScrollPosition) / OFFSET;
  const opacity = Math.min(progress, MAX_OPACITY);
  const blur = Math.min(progress * 20, BLUR);

  return (
    <div
      className={clsxm('fixed', 'w-full', 'z-50')}
      style={{
        background: `rgba(41, 40, 51, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
      }}
    >
      <div
        className={clsxm(
          'flex',
          'items-center',
          'justify-between',
          'h-[72px]',
          'max-w-[1728px]',
          'mx-auto',
          'px-4',
          'w-full',
          'sm:h-[80px]',
          'md:h-[96px]',
          'md:px-16'
        )}
      >
        <Logo />
        <div className='relative flex h-full items-center'>
          {/* The buttons come with padding, but that ruins our nice
              alignment in the nav bar. We're going to slightly hack around
              that using negative margins instead. The left margin on the
              button is to maintain the container size. Since the other
              button is absolutely positioned, it depends on the container
              width to rendered correctly */}
          <Anchor.Tertiary
            className={clsxm(
              pageScrollPosition < BUTTON_BREAKPOINT
                ? 'sm:opacity-100'
                : 'sm:opacity-0',
              '-mr-11',
              'duration-300',
              'flex',
              'asdf',
              'opacity-0',
              'items-center',
              'ml-11',
              'transition-opacity'
            )}
            href='https://docs.realms.today/'
            onClick={() => trackClick('read_docs', 'nav_bar')}
          >
            <Icon
              img='external-link-thin-white'
              className='mr-2'
              alt='External link icon'
            />{' '}
            Read the docs
          </Anchor.Tertiary>
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
              pageScrollPosition > BUTTON_BREAKPOINT ? 'z-50' : '-z-50',
              'absolute',
              'duration-300',
              'right-0',
              'top-1/2',
              'transition-opacity',
              '-translate-y-1/2'
            )}
          >
            <SmallGradientAnchor
              href='https://app.realms.today'
              onClick={() => trackClick('enter_app', 'nav_bar')}
            >
              Enter App{' '}
              <Icon className='ml-2' img='arrow-thin-black' alt='Arrow' />
            </SmallGradientAnchor>
          </div>
        </div>
      </div>
    </div>
  );
}
