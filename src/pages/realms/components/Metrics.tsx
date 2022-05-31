import Header from '@/components/Header';
import Text from '@/components/Text';

type ImageProps = {
  src: string;
  className?: string;
};

const DAOImage = ({
  src,
  className = 'max-h-[60px] max-w-[60px] ml-[-14px]',
}: ImageProps) => <img src={src} alt='' className={className} />;

const IntegrationImage = ({
  src,
  className = 'max-h-[38px] max-w-[38px] ml-[-14px]',
}: ImageProps) => <img src={src} alt='' className={className} />;

type MetricsProps = {
  title: string;
  text: string;
  children: React.ReactNode;
};

const MetricsBox = ({ title, text, children }: MetricsProps) => {
  return (
    <div className='xl:max-w-1/4 my-7 w-full text-left md:my-8 md:text-center xl:my-0 xl:text-left'>
      <Header as='h4' withGradientPurple>
        {title}
      </Header>
      {/* xl:min-h-[100px] min-h-[72px] min-h-[90px] */}
      <div className='flex items-center justify-start py-4 md:justify-center xl:min-h-[100px] xl:justify-start xl:py-5'>
        {children}
      </div>
      <Text>{text}</Text>
    </div>
  );
};

export const ListOfMetrics = () => {
  return (
    <div className='flex flex-col xl:flex-row xl:space-x-12'>
      <MetricsBox
        title='Growing value'
        text='Grape, UXD, Mango, Monkes & 600+ more DAOs'
      >
        <Header as='h3'>$</Header>
        <Header>946,355,781</Header>
      </MetricsBox>
      <MetricsBox
        title='Communities thriving'
        text='Grape, UXD, Mango, Monkes & 600+ more DAOs'
      >
        {/* make new component & map through images to rerfactor? */}
        <DAOImage src='/dao/blue-grape.png' className='ml-0 max-h-[60px]' />
        <DAOImage src='/dao/blue-uxd.png' />
        <DAOImage src='/dao/blue-mango.png' />
        <DAOImage src='/dao/blue-monke.png' />
        <DAOImage src='/dao/blue-ukraine.png' />
        <DAOImage src='/dao/placeholder.png' />
      </MetricsBox>
      <MetricsBox
        title='Deeper integrations'
        text='Staking, Identity, Defi & Notifications'
      >
        {/* make new component & map through images to rerfactor? */}
        <IntegrationImage
          src='/dao/integration-mango.png'
          className='ml-0 max-h-[38px]'
        />
        <IntegrationImage src='/dao/integration-marinade.png' />
        <IntegrationImage src='/dao/integration-solend.png' />
        <IntegrationImage src='/dao/integration-serum.png' />
        <IntegrationImage src='/dao/integration-cardinal.png' />
        <Text as='p3' withOpacity>
          & more
        </Text>
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
