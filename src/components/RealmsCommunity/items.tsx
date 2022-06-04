import { Props } from './Section';

export const ITEMS: Omit<Props, 'className' | 'index'>[] = [
  {
    alignment: 'right',
    image: '/backgrounds/gov-structure.png',
    text: 'Mint your own token, leverage an NFT collection, lock tokens via veTokens, or choose some other structure.',
    title: (
      <>
        Choose your
        <br />
        governance structure
      </>
    ),
  },
  {
    alignment: 'left',
    image: '/backgrounds/coordinate-members.png',
    text: 'Bring members of your community onboard to participate in your DAO’s activity.',
    title: (
      <>
        Invite and coordinate
        <br />
        your members
      </>
    ),
    extra: (
      <div className='flex items-center gap-1'>
        <img
          alt='Cardinal'
          className='-ml-2 h-[38px] w-[38px]'
          src='/dao/integration-cardinal.png'
        />
        <div className='text-xs opacity-50'>
          Integrate Twitter with Cardinal
        </div>
      </div>
    ),
  },
  {
    alignment: 'right',
    image: '/backgrounds/engage-proposals.png',
    text: 'Create proposals and use NFTs, tokens, or veTokens alongside delegation to customize voting for your DAO.',
    title: 'Engage with proposals',
  },
  {
    alignment: 'left',
    image: '/backgrounds/allocate-treasury.png',
    text: "Leverage your DAO's treasury to enable the initiatives and staking / DeFi integrations important to your community.",
    title: (
      <>
        Fund and allocate
        <br />
        the treasury
      </>
    ),
    extra: (
      <div className='flex items-center gap-1'>
        <div className='-ml-2 flex items-center -space-x-4'>
          <img
            alt='Mango'
            className='h-[38px] w-[38px]'
            src='/dao/integration-mango.png'
          />
          <img
            alt='Marinade'
            className='h-[38px] w-[38px]'
            src='/dao/integration-marinade.png'
          />
          <img
            alt='Solend'
            className='h-[38px] w-[38px]'
            src='/dao/integration-solend.png'
          />
          <img
            alt='Friktion'
            className='h-[38px] w-[38px]'
            src='/dao/integration-friktion.png'
          />
        </div>
        <div className='max-w-[245px] text-xs opacity-50'>
          Integrations include Mango, Marinade, Friktion, and Solend
        </div>
      </div>
    ),
  },
  {
    alignment: 'right',
    image: '/backgrounds/notify-members.png',
    text: "Leverage email, text, or wallet notifications to let your community know when it's time to take action.",
    title: 'Notifying Members',
    extra: (
      <div className='flex items-center gap-1'>
        <div className='-ml-2 flex items-center -space-x-4'>
          <img
            alt='Dialect'
            className='h-[38px] w-[38px]'
            src='/dao/integration-dialect.png'
          />
          <img
            alt='Notifi'
            className='h-[38px] w-[38px]'
            src='/dao/integration-notifi.png'
          />
        </div>
        <div className='max-w-[245px] text-xs opacity-50'>
          Integrations include Dialect and Notifi
        </div>
      </div>
    ),
  },
  {
    alignment: 'left',
    image: '/backgrounds/analytics.png',
    text: "Have your DAO's key metrics at your fingertips to aid in your decision making.",
    title: 'Analytics',
  },
];
