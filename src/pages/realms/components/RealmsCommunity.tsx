import Header from '@/components/Header';

type OptionsProps = {
  number: string;
  isBlue: boolean;
  isPurple: boolean;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  direction?: string;
  // integrationImg?: string;
  integration?: string;
};

const OptionsBox = ({
  number,
  isBlue,
  isPurple,
  imgSrc,
  imgAlt,
  title,
  description,
  direction = 'ltr',
  integration,
}: OptionsProps) => {
  return (
    <div
      className={`flex flex-wrap ${
        direction === 'rtl' ? 'md:flex-row-reverse' : 'flex-row'
      } items-center space-y-5`}
    >
      <div className='relative w-full lg:w-1/2'>
        <img
          src={`backgrounds/${imgSrc}.png`}
          alt={imgAlt}
          className='relative z-[0] w-full rounded'
        />
      </div>
      <div className='w-full px-1 text-left lg:w-1/2 lg:px-16'>
        <div className='flex items-start space-x-4'>
          <div className='flex max-h-[32px] max-w-[32px] items-center justify-center rounded-full bg-nightgrey p-[24px] md:min-h-[56px] md:min-w-[56px] md:p-0'>
            <Header
              as='h3'
              withGradientBlue={isBlue}
              withGradientPurple={isPurple}
              className=''
            >
              {number}
            </Header>
          </div>
          <div>
            <Header as='h3' className='mb-4'>
              {title}
            </Header>
            <div className='text-base opacity-70'>{description}</div>
            <div className='text-xs opacity-70'>{integration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListOfPros = [
  {
    number: '1',
    isBlue: false,
    isPurple: true,
    imgSrc: 'gov-structure',
    imgAlt: 'Governanve Structure',
    title: 'Choose your governance structure',
    description:
      'Mint your own token, leverage an NFT collection, lock tokens via veTokens, or choose some other structure.',
    direction: 'rtl',
  },
  {
    number: '2',
    isBlue: true,
    isPurple: false,
    imgSrc: 'coordinate-members',
    imgAlt: 'Coordinate Members',
    title: 'Invite and coordinate your members',
    description:
      'Bring members of your community onboard to participate in your DAO’s activity.',
    direction: 'ltr',
    integration: 'Integrate Twitter with Cardinal',
  },
  {
    number: '3',
    isBlue: false,
    isPurple: true,
    imgSrc: 'engage-proposals',
    imgAlt: 'Engage Proposals',
    title: 'Engage with proposals',
    description:
      'Create proposals and use NFTs, tokens, or veTokens alongside delegation to customize voting for your DAO.',
    direction: 'rtl',
  },
  {
    number: '4',
    isBlue: true,
    isPurple: false,
    imgSrc: 'allocate-treasury',
    imgAlt: 'Allocate Treasury',
    title: 'Fund and allocate the treasury',
    description: `Leverage your DAO's treasury to enable the initiatives and staking / DeFi integrations important to your community.`,
    direction: 'ltr',
    integration: '',
  },
  {
    number: '5',
    isBlue: false,
    isPurple: true,
    imgSrc: 'notify-members',
    imgAlt: 'Notifying Members',
    title: 'Notifying Members',
    description: `Leverage email, text, or wallet notifications to let your community know when it's time to take action.`,
    direction: 'rtl',
    integration: 'Integrations include Dialect and Notifi',
  },
  {
    number: '6',
    isBlue: true,
    isPurple: false,
    imgSrc: 'analytics',
    imgAlt: 'Analytics',
    title: 'Analytics',
    description: `Have your DAO's key metrics at your fingertips to aid in your decision making.`,
    direction: 'ltr',
    integration: '',
  },
];

export default function RealmsCommunity() {
  return (
    <div className='pb-20 pt-9 md:pt-24'>
      <Header as='h3' className='text-center'>
        Using Realms to power your community
      </Header>
      <div className='space-y-20 pt-14 md:pt-20'>
        {ListOfPros.map((props) => (
          <OptionsBox key={props.title} {...props} />
        ))}
      </div>
    </div>
  );
}
