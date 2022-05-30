import Image from 'next/image';

import Header from '@/components/Header';

type TextProps = {
  number: string;
  isBlue: boolean;
  isPurple: boolean;
  title: string;
  description: string;
  integration?: string;
};

export const TextBox = ({
  number,
  isBlue,
  isPurple,
  title,
  description,
  integration,
}: TextProps) => {
  return (
    <div className='w-full px-1 text-left'>
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
  );
};

type OptionsProps = {
  imgSrc: string;
  imgAlt: string;
  direction?: string;
  number: string;
  isBlue: boolean;
  isPurple: boolean;
  title: string;
  description: string;
  integration?: string;
};

const OptionsBox = ({
  imgSrc,
  imgAlt,
  direction = 'ltr',
  number,
  isBlue,
  isPurple,
  title,
  description,
  integration,
}: OptionsProps) => {
  return (
    <div
      className={`flex flex-wrap ${
        direction === 'ltr' ? 'md:flex-row-reverse' : 'flex-row'
      } items-center`}
    >
      <div
        // className='relative w-full bg-spl-gov lg:w-1/2'
        className='relative w-full md:w-[60%]'
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout='responsive'
          width={1200}
          height={916}
          objectFit='scale-down'
        />
        <div className='absolute top-[70%] md:hidden'>
          <TextBox
            number={number}
            isBlue={isBlue}
            isPurple={isPurple}
            title={title}
            description={description}
            integration={integration}
          />
        </div>
      </div>
      <div className='hidden w-[40%] md:inline'>
        <TextBox
          number={number}
          isBlue={isBlue}
          isPurple={isPurple}
          title={title}
          description={description}
          integration={integration}
        />
      </div>
    </div>
  );
};

const ListOfPros = [
  {
    number: '1',
    isBlue: false,
    isPurple: true,
    imgSrc: '/backgrounds/gov-structure.png',
    imgAlt: 'Governance Structure',
    title: 'Choose your governance structure',
    description:
      'Mint your own token, leverage an NFT collection, lock tokens via veTokens, or choose some other structure.',
    direction: 'rtl',
  },
  {
    number: '2',
    isBlue: true,
    isPurple: false,
    imgSrc: '/backgrounds/coordinate-members.png',
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
    imgSrc: '/backgrounds/engage-proposals.png',
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
    imgSrc: '/backgrounds/allocate-treasury.png',
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
    imgSrc: '/backgrounds/notify-members.png',
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
    imgSrc: '/backgrounds/analytics.png',
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
