import { SelectDaoToCreate } from '@/components/Button';
import Header from '@/components/Header';

type SmallImageProps = {
  src: string;
};
export const SmallImage = ({ src }: SmallImageProps) => (
  <div className='flex items-center justify-center rounded-full border border-[#E465B9]/30 bg-black'>
    {/* NavyBox */}
    <img src={`/icons/${src}.svg`} className='m-1.5 h-7' alt='' />
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
  // mainImgSrc, {/* Placeholder Image */}
  bgImage,
  headerText,
  descriptionText,
  // smallImgSrcs,
  imgText,
  buttonText,
  buttonHref,
}: DAOProps) => (
  // GreenBox
  // bg-daotype-tokenized
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
          <SmallImage src='mango-dao' />
          <SmallImage src='mango-dao' />
          <SmallImage src='mango-dao' />
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
        //   { smallSrc: '', label: '' },
        //   { smallSrc: '', label: '' },
        //   { smallSrc: '', label: '' },
        // ]}
        imgText={`The Sanctuary, Ukraine.SOL,\nSPL Governance & more`}
        buttonText='Start Multi-Signature DAO'
        buttonHref='/solana/create_dao/multisig'
      />
      <DAOType
        bgImage='bg-daotype-nft-community'
        headerText='Multi-Signature Wallet'
        descriptionText='A “multisig” is a shared wallet, typically with two or more members authorizing transactions.'
        // smallImgSrcs={[
        //   { smallSrc: '', label: '' },
        //   { smallSrc: '', label: '' },
        //   { smallSrc: '', label: '' },
        // ]}
        imgText={`The Sanctuary, Ukraine.SOL,\nSPL Governance & more`}
        // imgText1='The Sanctuary, Ukraine.SOL,'
        // imgText2='SPL Governance & more'
        buttonText='Start Multi-Signature DAO'
        buttonHref='/solana/create_dao/multisig'
      />
      <DAOType
        bgImage='bg-daotype-tokenized'
        headerText='Multi-Signature Wallet'
        descriptionText='A “multisig” is a shared wallet, typically with two or more members authorizing transactions.'
        // smallImgSrcs={[
        //   { smallSrc: '', label: '' },
        //   { smallSrc: '', label: '' },
        //   { smallSrc: '', label: '' },
        // ]}
        imgText={`The Sanctuary, Ukraine.SOL,\nSPL Governance & more`}
        buttonText='Start Multi-Signature DAO'
        buttonHref='/solana/create_dao/multisig'
      />
    </div>
  );
};

const DAOStructures2 = () => {
  return (
    <div className='w-full py-16 md:pt-24 md:pb-28'>
      {/* <div className='mb-4 text-left'> */}
      <Header as='h2' className='text-center md:px-20 xl:px-0 xl:text-left'>
        Flexible structures <br className='block md:hidden' />
        for all DAO types
      </Header>
      {/* </div> */}
      <ListOfDAOTypes />
    </div>
  );
};

export default DAOStructures2;
