import { Props } from '../Section';

const NOTIFY_MEMBERS: Omit<Props, 'alignment' | 'className' | 'index'> = {
  image: '/assets/backgrounds/notify-members.png',
  text: "Use email, text, or wallet notifications to let your community know when it's time to take action.",
  title: 'Notify your members',
  extra: (
    <div className='flex items-center gap-1'>
      <div className='-ml-2 flex items-center -space-x-4'>
        <img
          alt='Dialect'
          className='h-[50px] w-[50px]'
          src='/assets/dao/integration-dialect.png'
        />
        <img
          alt='Notifi'
          className='h-[50px] w-[50px]'
          src='/assets/dao/integration-notifi.png'
        />
      </div>
      <div className='max-w-[245px] text-xs opacity-50'>
        Integrations include Dialect and Notifi
      </div>
    </div>
  ),
};

export default NOTIFY_MEMBERS;
