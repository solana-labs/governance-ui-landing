import { Props } from '../Section';

const COORDINATE_MEMBERS: Omit<Props, 'alignment' | 'className' | 'index'> = {
  image: '/backgrounds/coordinate-members.png',
  text: 'Bring members of your community onboard to participate in your DAO’s activity.',
  title: (
    <>
      Invite and coordinate
      <br />
      your members
    </>
  ),
  // Re-enable once we can display integrations
  // extra: (
  //   <div className='flex items-center gap-1'>
  //     <img
  //       alt='Cardinal'
  //       className='-ml-2 h-[38px] w-[38px]'
  //       src='/dao/integration-cardinal.png'
  //     />
  //     <div className='text-xs opacity-50'>Integrate Twitter with Cardinal</div>
  //   </div>
  // ),
};

export default COORDINATE_MEMBERS;
