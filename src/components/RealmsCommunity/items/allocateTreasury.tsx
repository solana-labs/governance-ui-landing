import { Props } from '../Section';

const ALLOCATE_TREASURY: Omit<Props, 'alignment' | 'className' | 'index'> = {
  image: '/assets/backgrounds/allocate-treasury.png',
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
      <div className='-ml-2 flex items-center -space-x-6'>
        <img
          alt='Mango'
          className='h-[50px] w-[50px]'
          src='/assets/dao/integration-mango.png'
        />
        <img
          alt='Marinade'
          className='h-[50px] w-[50px]'
          src='/assets/dao/integration-marinade.png'
        />
        <img
          alt='Solend'
          className='h-[50px] w-[50px]'
          src='/assets/dao/integration-solend.png'
        />
        <img
          alt='Friktion'
          className='h-[50px] w-[50px]'
          src='/assets/dao/integration-friktion.png'
        />
      </div>
      <div className='max-w-[245px] text-xs opacity-50'>
        Integrations include Mango, Marinade, Friktion, and Solend
      </div>
    </div>
  ),
};

export default ALLOCATE_TREASURY;
