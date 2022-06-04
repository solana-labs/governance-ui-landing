import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';
import Tooltip from '@/components/Tooltip';

import Section from './Section';

const CONFIG = [
  {
    title: 'SPL Governance',
    content:
      'Powering Realms, SPL Governance is an asset and DAO type agnostic standard for building DAOs on Solana.',
    icon: '/icons/solana-logo.png',
    footer: (
      <Link href='' passHref>
        <a
          className={clsxm(
            'inline-block',
            'mt-3',
            'opacity-50',
            'text-xs',
            'underline',
            'transition',
            'active:text-white',
            'focus:opacity-90',
            'focus:text-realms-theme-blue',
            'hover:opacity-90',
            'hover:text-realms-theme-blue'
          )}
        >
          Learn More
        </a>
      </Link>
    ),
  },
  {
    title: (
      <>
        Treasury
        <br />
        Management
      </>
    ),
    content:
      'Earn yield, stake your treasury, and decide as a community on resource allocation.',
    icon: '/icons/treasury.png',
  },
  {
    title: (
      <>
        3rd Party
        <br />
        Integrations
      </>
    ),
    content:
      'Leverage 10+ integrations across notifications, DeFi / staking, and identity to enhance your DAO.',
    icon: '/icons/integrations.png',
    footer: (
      <div className='md:flex md:items-center'>
        <div className='-ml-2 flex -space-x-6'>
          {[
            { src: '/dao/integration-mango.png', title: 'Mango' },
            { src: '/dao/integration-marinade.png', title: 'Marinade' },
            { src: '/dao/integration-serum.png', title: 'Serum' },
          ].map((integration) => (
            <Tooltip text={integration.title} key={integration.src}>
              {/* Tooltips rely on :before and :after pseudo-elements to
                  render. Unforunately, those don't seem to work on image tags,
                  so we need to wrap each image in a div */}
              <div>
                <img
                  alt={integration.title}
                  className='h-[60px] w-[60px]'
                  src={integration.src}
                />
              </div>
            </Tooltip>
          ))}
        </div>
        <div className='max-w-[202px] text-xs opacity-70'>
          Integrations include Cardinal, Marinade, Friktion, Solend & more
        </div>
      </div>
    ),
  },
  {
    title: 'Fully Customizable',
    content:
      'Use the shared SPL Governance instance, or use your own for full control and immutability. Clone Realms to create your own DAO frontend.',
    icon: '/icons/customizable.png',
  },
  {
    title: (
      <>
        Vote Escrowed
        <br />
        Tokens (veTokens)
      </>
    ),
    content:
      'Increase voting weight within your DAO. Lock tokens for a fixed duration, indefinitely, or on a vesting schedule.',
    icon: '/icons/vetokens.png',
  },
  {
    title: 'Solana Advantage',
    content:
      "Enjoy near-zero fees in a fully on-chain product that contains the features and integrations to meet your DAO's needs.",
    icon: '/icons/advantage.png',
  },
];

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
