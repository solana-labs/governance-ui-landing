import { Props } from '../Section';

const ALLOCATE_TREASURY: Omit<Props, 'alignment' | 'className' | 'index'> = {
  image: '/backgrounds/allocate-treasury.png',
  text: "Leverage your DAO's treasury to enable the initiatives and staking / DeFi options important to your community.",
  title: (
    <>
      Fund and allocate
      <br />
      the treasury
    </>
  ),
  // Re-enable once we can display integrations
  // extra: (
  //   <div className='flex items-center gap-1'>
  //     <div className='-ml-2 flex items-center -space-x-4'>
  //       <img
  //         alt='Mango'
  //         className='h-[38px] w-[38px]'
  //         src='/dao/integration-mango.png'
  //       />
  //       <img
  //         alt='Marinade'
  //         className='h-[38px] w-[38px]'
  //         src='/dao/integration-marinade.png'
  //       />
  //       <img
  //         alt='Solend'
  //         className='h-[38px] w-[38px]'
  //         src='/dao/integration-solend.png'
  //       />
  //       <img
  //         alt='Friktion'
  //         className='h-[38px] w-[38px]'
  //         src='/dao/integration-friktion.png'
  //       />
  //     </div>
  //     <div className='max-w-[245px] text-xs opacity-50'>
  //       Integrations include Mango, Marinade, Friktion, and Solend
  //     </div>
  //   </div>
  // ),
};

export default ALLOCATE_TREASURY;
