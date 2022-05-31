import { SelectDaoToCreate } from '@/components/Button';
import Header from '@/components/Header';
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
  buttonHref,
  children,
}: DAOProps) => (
  // GreenBox
  <div
    className={`flex min-w-[10rem] flex-col ${bgImage} bg-cover px-5 py-16 md:py-12 md:px-[40px] xl:flex-col xl:py-8 xl:px-0`}
  >
    {/* OrangeBox */}
    <div className='xl:px-8'>
      <Header as='h3' className='mb-4'>
        {headerText}
      </Header>
      {/* YellowBox */}
      <div className='w-full md:w-3/5'>
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
      <SelectDaoToCreate href={buttonHref} text={buttonText} />
    </div>
  </div>
);

export const ListOfDAOTypes = () => {
  return (
    <div className='mt-16 flex flex-col justify-between space-y-4 md:flex-col xl:flex-row xl:space-y-0 xl:space-x-8'>
      {/* <div className="flex flex-col justify-between md:flex-col lg:flex-row lg:space-x-8 mt-16"> */}
      <DAOType
        bgImage='bg-daotype-multisig'
        headerText='Multi-Signature Wallet'
        descriptionText='A “multisig” is a shared wallet, typically with two or more members authorizing transactions.'
        imgText={`The Sanctuary, Ukraine.SOL,\nSPL Governance & more`}
        buttonText='Start Multi-Signature DAO'
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
        headerText='NFT Community DAO'
        descriptionText='NFT Community DAOs leverage NFTs as membership,  giving NFT holders voting power to make decisions.'
        // smallImgSrcs={[
        //   { smallSrc: 'mango', alt: 'mango' },
        //   { smallSrc: 'mango', alt: 'mango' },
        //   { smallSrc: 'mango', alt: 'mango' },
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
        //   { smallSrc: 'mango', alt: 'mango' },
        //   { smallSrc: 'mango', alt: 'mango' },
        //   { smallSrc: 'mango', alt: 'mango' },
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
