import DAOStructures from './components/DAOStructures';
import ManagingDAO from './components/ManagingDAO';
import Metrics from './components/Metrics';
import RealmsCommunity from './components/RealmsCommunity';
import RealmsCommunity1 from './components/RealmsCommunity1';
import SolanaTooling from './components/SolanaTooling';
import SPLGov from './components/SPLGov';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Section from '../../components/Section';

const Realms = () => {
  return (
    <div className='landing-page relative'>
      <NavBar />
      <SolanaTooling />
      <Section bgColor='bg-nightgrey'>
        <Metrics />
      </Section>
      <ManagingDAO />
      {/* mx-auto w-full max-w-[1440px] px-4 md:px-5 lg:w-5/6 lg:px-0 xl:px-20' */}
      <Section className='mx-auto w-full max-w-[1440px] px-5 md:px-24 xl:px-8 '>
        <DAOStructures />
      </Section>
      <Section>
        <RealmsCommunity />
        <hr></hr>
        <RealmsCommunity1 />
      </Section>
      <Section>
        <SPLGov />
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
};

export default Realms;
