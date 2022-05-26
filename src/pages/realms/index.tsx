import ManagingDAO from './components/ManagingDAO';
import Header from '../../components/Header';

type RealmsProps = {
  bgColor: string;
  children: React.ReactNode;
};

export const Section = ({
  bgColor = 'bg-[#292833]',
  children,
}: RealmsProps) => {
  return (
    <div className={`w-full ${bgColor} relative`}>
      <div className='mx-auto w-full max-w-[1440px] px-5 md:px-16 lg:w-5/6 lg:px-0 xl:px-20'>
        {children}
      </div>
    </div>
  );
};

const Realms = () => {
  return (
    <div className='landing-page relative'>
      {/* <Navbar /> */}
      <Section bgColor='bg-[#201f27]'>
        <ManagingDAO />
      </Section>
      <Header as='h1' className='' withGradient={false}>
        I am H1
      </Header>
      <Header as='h2' className='' withGradient={false}>
        I am H2
      </Header>
      <Header as='h3' className='' withGradient={false}>
        I am H3
      </Header>
      <Header as='h4' className='' withGradient={false}>
        I am H4
      </Header>
      <Header as='h5' className='' withGradient={false}>
        I am H5
      </Header>
      <Header as='h6' className='' withGradient={false}>
        I am H6
      </Header>

      {/* <Footer /> */}
    </div>
  );
};

export default Realms;
