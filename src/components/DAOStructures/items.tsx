import { AlignType } from '@/components/DAOStructures/Card';

const ITEMS = [
  {
    bg: '/assets/backgrounds/daotype-multisig.png',
    bgAlignment: 'right' as AlignType,
    content:
      'A “multisig” is a shared wallet, typically with two or more members authorizing transactions.',
    cta: {
      href: 'https://app.realms.today/realms/new/multisig',
      text: 'Create a Multisig Wallet',
    },
    daos: {
      icons: [
        '/assets/dao/purple-sanctuary.png',
        '/assets/dao/purple-ukraine.png',
        '/assets/dao/purple-realms.png',
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
    bg: '/assets/backgrounds/daotype-nft-community.png',
    bgAlignment: 'left' as AlignType,
    content:
      'NFT Community DAOs leverage NFTs as membership,  giving NFT holders voting power to make decisions.',
    cta: {
      href: 'https://app.realms.today/realms/new/nft',
      text: 'Create NFT Community DAO',
    },
    daos: {
      icons: [
        '/assets/dao/purple-monke.png',
        '/assets/dao/purple-imp-rain.png',
        '/assets/dao/purple-sporagers.png',
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
    bg: '/assets/backgrounds/daotype-tokenized.png',
    bgAlignment: 'center' as AlignType,
    content:
      'DAO members receive a community token to denote their membership and allow them to vote on proposals.',
    cta: {
      href: 'https://app.realms.today/realms/new/community-token',
      text: 'Create a Community Token DAO',
    },
    daos: {
      icons: [
        '/assets/dao/purple-mango.png',
        '/assets/dao/purple-f-a-f.png',
        '/assets/dao/purple-grape.png',
      ],
      text: 'Mango DAO, Friends & Family DAO, GRAPE & more',
    },
    title: (
      <>
        <span className='inline-block'>Community&nbsp;</span>
        <span className='inline-block'>Token DAO</span>
      </>
    ),
    trackingLabel: 'community_token_dao',
  },
];

export default ITEMS;
