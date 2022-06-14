import { AlignType } from '@/components/DAOStructures/Card';

const ITEMS = [
  {
    bg: '/backgrounds/daotype-multisig.png',
    bgAlignment: 'right' as AlignType,
    content:
      'A “multisig” is a shared wallet, typically with two or more members authorizing transactions.',
    cta: {
      href: 'https://app.realms.today/realms/new/multisig',
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
    title: (
      <>
        <span className='inline-block'>Multi-</span>
        <span className='inline-block'>Signature Wallet</span>
      </>
    ),
    trackingLabel: 'multi_sig_wallet',
  },
  {
    bg: '/backgrounds/daotype-nft-community.png',
    bgAlignment: 'left' as AlignType,
    content:
      'NFT Community DAOs leverage NFTs as membership,  giving NFT holders voting power to make decisions.',
    cta: {
      href: 'https://app.realms.today/realms/new/nft',
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
    title: (
      <>
        <span className='inline-block'>NFT&nbsp;</span>
        <span className='inline-block'>Community DAO</span>
      </>
    ),
    trackingLabel: 'nft_community_dao',
  },
  {
    bg: '/backgrounds/daotype-tokenized.png',
    bgAlignment: 'center' as AlignType,
    content:
      'DAO members receive a governance token to denote their membership and allow them to vote on proposals.',
    cta: {
      href: 'https://app.realms.today/realms/new/tokenized',
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
    trackingLabel: 'tokenized_dao',
  },
];

export default ITEMS;
