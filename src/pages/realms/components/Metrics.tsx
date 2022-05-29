import Header from '@/components/Header';

type MetricsProps = {
  title: string;
  text: string;
  children: React.ReactNode;
};

const MetricsBox = ({ title, text, children }: MetricsProps) => {
  return (
    <div>
      <Header as='h4' withGradientPurple className=''>
        {title}
      </Header>
      <div className='py-5'>{children}</div>
      <div className='text-sm'>{text}</div>
    </div>
  );
};

export const ListOfMetrics = () => {
  return (
    <div className='flex flex-col text-left md:text-center xl:flex-row xl:justify-between xl:text-left'>
      <MetricsBox
        title='Growing value'
        text='Grape, UXD, Mango, Monkes & 600+ more DAOs'
      >
        <div className='flex items-center'>
          <Header as='h3'>$</Header>
          <Header>946,355,781</Header>
        </div>
      </MetricsBox>
      <MetricsBox
        title='Communities thriving'
        text='Grape, UXD, Mango, Monkes & 600+ more DAOs'
      >
        <div className='flex items-center'>
          <img src='/icons/blue-grape.png' className='h-[40px]' alt='' />
        </div>
      </MetricsBox>
      <MetricsBox
        title='Deeper integrations'
        text='Staking, Identity, Defi & Notifications'
      >
        <div className='flex items-center'>
          <img src='/icons/blue-grape.png' className='h-[40px]' alt='' />
          <div className='text-xs opacity-70'>& more</div>
        </div>
      </MetricsBox>
    </div>
  );
};

export default function Metrics() {
  return (
    <div className='py-8 md:py-[50px] xl:py-[40px]'>
      <ListOfMetrics />
    </div>
  );
}
