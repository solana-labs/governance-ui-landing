import { SelectDaoToCreate } from '@/components/Button';
import Header from '@/components/Header';

type SmallImageProps = {
  src: string;
  label: string;
};
export const SmallImageWithDescription = ({ src, label }: SmallImageProps) => (
  <div className='flex flex-col text-center'>
    {/* NavyBox */}
    <img src={`/img/realms-web/icons/${src}.svg`} className='my-2 h-7' alt='' />
    <div className='max-w-[100px] text-sm opacity-70'>{label}</div>
  </div>
);

type DAOProps = {
  headerText: string;
  descriptionText: string;
  smallImgSrcs: string;
  buttonText: string;
  buttonHref: string;
};

export const DAOType = ({
  // GreenBox
  // mainImgSrc, {/* Placeholder Image */}
  headerText,
  descriptionText,
  smallImgSrcs,
  buttonText,
  buttonHref,
}: DAOProps) => (
  // GreenBox
  <div className='flex min-w-[10rem] flex-col items-center text-left lg:flex-col'>
    {/* OrangeBox */}
    {/* Placeholder Image - will get included after initial launch */}
    {/* <div className="min-w-[150px] md:w-1/5">
      <img
        className="max-w-[200px] w-full md:w-[160px] lg:w-[180px]"
        src={`/img/realms-web/icons/${mainImgSrc}.png`}
        alt=""
      />
    </div> */}
    <div className='w-4/5 md:w-3/5 lg:w-full'>
      <div className='text-center md:text-left'>
        {/* LimeBox */}
        <Header as='h3' className='mb-2 md:mb-5'>
          {headerText}
        </Header>
        {/* LavenderBox */}
        {/* <div className="text-sm md:text-base opacity-70"> */}
        <div className='text-[14px] font-light leading-[19.6px] opacity-70 md:text-[18px] md:leading-[25.2px]'>
          {descriptionText}
        </div>
      </div>
      {/* PurpleBox*/}
      {/* <div className="flex flex-row justify-between space-x-4 px-12 py-4 md:px-0 xl:px-4"> */}
      <div className='lg:space-px-4 flex flex-row justify-center space-x-4 py-4 px-12 md:justify-start md:space-x-12 md:px-4 lg:justify-center lg:px-4'>
        {smallImgSrcs.map(({ smallSrc, label }, index) =>
          index == 1 ? (
            <>
              <div className='block lg:hidden xl:block'>
                <SmallImageWithDescription
                  key={`${label}-${index}`}
                  src={smallSrc}
                  label={label}
                />
              </div>
            </>
          ) : (
            <>
              <SmallImageWithDescription
                key={`${label}-${index}`}
                src={smallSrc}
                label={label}
              />
            </>
          )
        )}
      </div>
      <SelectDaoToCreate
        href={buttonHref}
        text={buttonText}
        // className='flex justify-center md:justify-start'
      />
    </div>
  </div>
);

export const ListOfDAOTypes = () => {
  return (
    <div className='mt-16 flex flex-col justify-between space-y-16 md:flex-col lg:flex-row lg:space-y-0 lg:space-x-8'>
      {/* <div className="flex flex-col justify-between md:flex-col lg:flex-row lg:space-x-8 mt-16"> */}
      <DAOType
        // mainImgSrc="dao-type-medium-multisig" {/* Placeholder Image */}
        headerText='Multi-Signature DAO'
        descriptionText='A "multisig" DAO is a shared wallet, typically with two or more members authorizing transactions. This is a secure way for groups to store and access funds'
        smallImgSrcs={[
          { smallSrc: '', label: '' },
          { smallSrc: '', label: '' },
          { smallSrc: '', label: '' },
        ]}
        buttonText='Start Multi-Signature DAO'
        buttonHref='/solana/create_dao/multisig'
      />

      <DAOType
        // mainImgSrc="dao-type-medium-nft" {/* Placeholder Image */}
        headerText='HNFT Community DAO'
        descriptionText='NFT Community DAOs leverage NFTs as membership, giving holders of NFTs within specified collections voting power to make investment decisions.'
        smallImgSrcs={[
          { smallSrc: '', label: '' },
          { smallSrc: '', label: '' },
          { smallSrc: '', label: '' },
        ]}
        buttonText='Start NFT Community DAO'
        buttonHref='/solana/create_dao/nft'
      />

      <DAOType
        // mainImgSrc="dao-type-medium-govtoken" {/* Placeholder Image */}
        headerText='Governance Token DAO'
        descriptionText='Governance Token DAOs help orgs determine how its funds are used. This flat voting hierarchy allows anyone to participate in the decisions of the org.'
        smallImgSrcs={[
          { smallSrc: '', label: '' },
          { smallSrc: '', label: '' },
          { smallSrc: '', label: '' },
        ]}
        buttonText='Start Gov Token DAO'
        buttonHref='/solana/create_dao/gov-token'
      />
    </div>
  );
};

const DAOStructures = () => {
  return (
    <div className='w-full py-16 md:pt-24 md:pb-28'>
      <div className='mb-4 text-center md:text-left'>
        <Header as='h2'>
          Flexible structures <br />
          for all DAO types
        </Header>
      </div>
      <ListOfDAOTypes />
    </div>
  );
};

export default DAOStructures;
