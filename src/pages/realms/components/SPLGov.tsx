import { AboutSplButton } from '@/components/Button';
import Header from '@/components/Header';

const SplGov = () => {
  return (
    <div className='rounded bg-cover pt-14 pb-14 md:bg-spl-gov md:px-16 md:pb-[90px] md:pt-12 '>
      <div className='flex items-center justify-start'>
        <div>The</div>
        <div>
          <img src='/icons/logo-solana-text.png' className='mx-2 h-4' alt='' />
        </div>
        <div className=''>Standard</div>
      </div>
      <Header as='h2' className='pt-10 pb-6 md:pt-14 md:pb-9'>
        SPL Governance
      </Header>
      <div className='flex flex-row flex-wrap text-base text-white lg:flex-nowrap'>
        <div className='space-y-6'>
          SPL Governance is a program the chief purpose of which is to provide
          core building blocks and primitives to create Decentralized Autonomous
          Organizations (DAOs) on Solana blockchain.
          <br />
          <br />
          The program is DAO type and asset type agnostic and can be used to
          build any type of DAOs which can own and manage any type of assets.
        </div>
        <div className='w-full md:min-w-[300px]'>
          {/* <div className="space-y-6 text-sm md:text-base text-black md:pr-8"> */}
          <div className='space-y-6 pt-7 lg:pt-0'>
            Solana has compiled a robust library of information to read.
          </div>
          <div className='w-full pt-6 text-center sm:text-left'>
            <AboutSplButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplGov;
