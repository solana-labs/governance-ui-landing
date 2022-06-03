import * as Button from '@/components/Button';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import Text from '@/components/Text';

type SmallImageProps = {
  src: string;
  className?: string;
};
export const SmallImage = ({
  src,
  className = 'max-h-[40px] max-w-[40px] ml-[-14px]',
}: SmallImageProps) => (
  // <div className='flex items-center justify-center'>
  <img src={src} className={className} alt='' />
  // </div>
);

type DAOProps = {
  bgImage: string;
  headerText: string;
  descriptionText: string;
  // smallImgSrcs: string[];
  imgText: string;
  buttonText: string;
  buttonHref: string;
  children: React.ReactNode;
};

export const DAOType = ({
  // GreenBox
  bgImage,
  headerText,
  descriptionText,
  // smallImgSrcs,
  imgText,
  buttonText,
  children,
}: DAOProps) => (
  // GreenBox
  <div
    // className={`flex w-full flex-col ${bgImage} xl:max-w-1/4 xl:flex-col`}
    className={`flex w-full flex-col ${bgImage} xl:max-w-1/4 px-5 py-16 md:py-12 md:px-[40px] xl:flex-col xl:py-8 xl:px-0`}
  >
    {/* OrangeBox */}
    <div className='xl:px-8'>
      <div className='xl:min-h-[80px]'>
        <Header as='h3' className='mb-4 xl:whitespace-pre'>
          {headerText}
        </Header>
      </div>
      {/* YellowBox */}
      <div className='w-full md:w-3/5 xl:w-full'>
        <Text as='p1' withOpacity>
          {descriptionText}
        </Text>
      </div>
      {/* PinkBox*/}
      <div className='my-6 flex flex-row'>
        {/* CoralBox*/}
        <div className='flex items-center'>
          {/* <SmallImage src='purple-mango' alt='mango-dao' />
          <SmallImage src='purple-mango' alt='mango-dao' />
          <SmallImage src='purple-mango' alt='mango-dao' /> */}
          {/* {smallImgSrcs.map(({ smallSrc, alt }, index) => (
            <div className=''>
              <SmallImage key={`${alt}-${index}`} src={smallSrc} alt={alt} />
            </div>
          ))} */}
          {children}
        </div>
        {/* LimeBox*/}
        <Text as='p3' withOpacity className='ml-4 whitespace-pre'>
          {imgText}
        </Text>
      </div>
    </div>
    <div className='xl:px-4'>
      <Button.Dark className='w-full justify-between'>
        {buttonText} <Icon img='arrow-thin-blue' className='ml-4' alt='Arrow' />
      </Button.Dark>
    </div>
  </div>
);

export const ListOfDAOTypes = () => {
  return (
    <div className='mt-12 flex flex-col justify-between space-y-4 md:flex-col md:space-y-16 xl:flex-row xl:justify-center xl:space-y-0 xl:space-x-8'>
      <DAOType
        bgImage='bg-daotype-multisig'
        headerText='Multi-Signature Wallet'
        descriptionText='A “multisig” is a shared wallet, typically with two or more members authorizing transactions.'
        imgText={`The Sanctuary, Ukraine.SOL,\nSPL Governance & more`}
        buttonText='Create Multi-Signature DAO'
        buttonHref='/solana/create_dao/multisig'
      >
        <SmallImage
          src='/dao/purple-sanctuary.png'
          className='ml-0 max-h-[40px]'
        />
        <SmallImage src='/dao/purple-ukraine.png' />
        <SmallImage src='/dao/purple-realms.png' />
      </DAOType>
      <DAOType
        bgImage='bg-daotype-nft-community'
        headerText={`NFT\nCommunity DAO`}
        descriptionText='NFT Community DAOs leverage NFTs as membership, giving NFT holders voting power to make decisions.'
        // smallImgSrcs={[
        //   { smallSrc: 'mango' },
        //   { smallSrc: 'mango' },
        //   { smallSrc: 'mango' },
        // ]}
        imgText={`MonkeDAO, The Imperium of Rain,\nThe Sporagers & more`}
        buttonText='Create an NFT Community DAO'
        buttonHref='/solana/create_dao/multisig'
      >
        <SmallImage src='/dao/purple-monke.png' className='ml-0 max-h-[40px]' />
        <SmallImage src='/dao/purple-imp-rain.png' />
        <SmallImage src='/dao/purple-sporagers.png' />
      </DAOType>
      <DAOType
        bgImage='bg-daotype-tokenized'
        headerText='Tokenized DAO'
        descriptionText='DAO members receive a governance token to denote their membership and allow them to vote on proposals.'
        // smallImgSrcs={[
        //   { smallSrc: 'mango' },
        //   { smallSrc: 'mango' },
        //   { smallSrc: 'mango' },
        // ]}
        imgText={`Mango DAO, Friends & Family DAO,\nGRAPE & more`}
        buttonText='Create a Tokenized DAO'
        buttonHref='/solana/create_dao/multisig'
      >
        <SmallImage src='/dao/purple-mango.png' className='ml-0 max-h-[40px]' />
        <SmallImage src='/dao/purple-f-a-f.png' />
        <SmallImage src='/dao/purple-grape.png' />
      </DAOType>
    </div>
  );
};

const DAOStructures = () => {
  return (
    <div className='w-full py-16 md:pt-24 md:pb-28'>
      <Header as='h2' className='text-center md:px-20 xl:px-0 xl:text-left'>
        Flexible structures <br className='block md:hidden' />
        for all DAO types
      </Header>
      <ListOfDAOTypes />
    </div>
  );
};

export default DAOStructures;
