import Header from '@/components/Header';
import Text from '@/components/Text';

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
      <div className='justify-left xl:justify-left flex items-center py-5 md:justify-center'>
        {children}
      </div>
      <Text>{text}</Text>
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
        {/* <div className='justify-left xl:justify-left flex items-center md:justify-center'> */}
        <Header as='h3'>$</Header>
        <Header>946,355,781</Header>
        {/* </div> */}
      </MetricsBox>
      <MetricsBox
        title='Communities thriving'
        text='Grape, UXD, Mango, Monkes & 600+ more DAOs'
      >
        {/* <div className='flex items-center'> */}
        <img src='/icons/blue-grape.png' className='h-[40px]' alt='' />
        {/* </div> */}
      </MetricsBox>
      <MetricsBox
        title='Deeper integrations'
        text='Staking, Identity, Defi & Notifications'
      >
        {/* <div className='flex items-center'> */}
        <img src='/icons/blue-grape.png' className='h-[40px]' alt='' />
        <Text as='p3' withOpacity>
          & more
        </Text>
        {/* </div> */}
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
