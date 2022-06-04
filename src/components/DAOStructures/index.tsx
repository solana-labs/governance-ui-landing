import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import Header from '@/components/Header';

import Card from './Card';

const ITEMS = [
  {
    bg: '/backgrounds/daotype-multisig.png',
    content:
      'A “multisig” is a shared wallet, typically with two or more members authorizing transactions.',
    cta: {
      href: '',
      text: 'Create a Multisig Wallet',
    },
    daos: {
      icons: [
        '/dao/purple-sanctuary.png',
        '/dao/purple-ukraine.png',
        '/dao/purple-realms.png',
      ],
      text: 'The Sanctuary, Ukraine.SOL, SPL Governance & more',
    },
    title: 'Multi-Signature Wallet',
  },
  {
    bg: '/backgrounds/daotype-nft-community.png',
    content:
      'NFT Community DAOs leverage NFTs as membership,  giving NFT holders voting power to make decisions.',
    cta: {
      href: '',
      text: 'Create an NFT Community DAO',
    },
    daos: {
      icons: [
        '/dao/purple-monke.png',
        '/dao/purple-imp-rain.png',
        '/dao/purple-sporagers.png',
      ],
      text: 'MonkeDAO, The Imperium of Rain, The Sporagers & more',
    },
    title: 'NFT Community DAO',
  },
  {
    bg: '/backgrounds/daotype-tokenized.png',
    content:
      'DAO members receive a governance token to denote their membership and allow them to vote on proposals.',
    cta: {
      href: '',
      text: 'Create a Tokenized DAO',
    },
    daos: {
      icons: [
        '/dao/purple-mango.png',
        '/dao/purple-f-a-f.png',
        '/dao/purple-grape.png',
      ],
      text: 'Mango DAO, Friends & Family DAO, GRAPE & more',
    },
    title: 'Tokenized DAO',
  },
];

export default function DAOStructures() {
  return (
    <CenteredContent className='py-16 sm:py-20'>
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
          '1_5xl:text-left'
        )}
      >
        Flexible structures for all DAO types
      </Header>
      <div
        className={clsxm(
          'flex-col',
          'flex',
          'gap-x-4',
          'gap-y-4',
          'items-start',
          'md:flex-wrap',
          'lg:flex-row',
          'lg:justify-center',
          '1_5xl:justify-between'
        )}
      >
        {ITEMS.map((item) => (
          <Card
            {...item}
            className='w-full lg:max-w-[400px]'
            key={item.title}
          />
        ))}
      </div>
    </CenteredContent>
  );
}
