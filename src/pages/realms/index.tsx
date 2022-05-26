import DAOStructures from './components/DAOStructures';
import ManagingDAO from './components/ManagingDAO';
import Metrics from './components/Metrics';
import RealmsCommunity from './components/RealmsCommunity';
import SolanaTooling from './components/SolanaTooling';
import SPLGov from './components/SPLGov';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

type RealmsProps = {
  bgColor: string;
  children: React.ReactNode;
};

export const Section = ({
  bgColor = 'bg-background',
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
      <NavBar />
      <Section bgColor='bg-background'>
        <SolanaTooling />
      </Section>
      <Section bgColor='bg-nightgrey'>
        <Metrics />
        <ManagingDAO />
      </Section>
      <Section bgColor='bg-background'>
        <DAOStructures />
        <RealmsCommunity />
        <SPLGov />
        <Footer />
      </Section>
    </div>
  );
};

export default Realms;
