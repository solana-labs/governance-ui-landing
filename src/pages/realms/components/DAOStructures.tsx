import { SelectDaoToCreate } from '@/components/Button';
import Header from '@/components/Header';

type SmallImageProps = {
  src: string;
  alt: string;
};
export const SmallImage = ({ src, alt }: SmallImageProps) => (
  <div className='flex items-center justify-center'>
    <img src={`/icons/${src}.png`} className='h-[40px]' alt={alt} />
  </div>
);

type DAOProps = {
  bgImage: string;
  headerText: string;
  descriptionText: string;
  // smallImgSrcs: string;
  imgText: string;
  buttonText: string;
  buttonHref: string;
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
      <div className='text-base opacity-70'>{descriptionText}</div>
      {/* PinkBox*/}
      <div className='my-6 flex flex-row'>
        {/* CoralBox*/}
        <div className='flex items-center justify-center'>
          <SmallImage src='mango-dao' alt='mango-dao' />
          <SmallImage src='mango-dao' alt='mango-dao' />
          <SmallImage src='mango-dao' alt='mango-dao' />
          {/* {smallImgSrcs.map(({ smallSrc, alt }, index) => (
            <div className=''>
              <SmallImage key={`${alt}-${index}`} src={smallSrc} alt={alt} />
            </div>
          ))} */}
        </div>
        {/* LimeBox*/}
        <div className='ml-4 whitespace-pre text-xs opacity-70'>{imgText}</div>
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
        // smallImgSrcs={[
        //   { smallSrc: 'mango', alt: 'mango' },
        //   { smallSrc: 'mango', alt: 'mango' },
        //   { smallSrc: 'mango', alt: 'mango' },
        // ]}
        imgText={`The Sanctuary, Ukraine.SOL,\nSPL Governance & more`}
        buttonText='Start Multi-Signature DAO'
        buttonHref='/solana/create_dao/multisig'
      />
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
      />
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
      />
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
