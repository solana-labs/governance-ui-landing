import DAOStructures from './components/DAOStructures';
import ManagingDAO from './components/ManagingDAO';
import Metrics from './components/Metrics';
import RealmsCommunity from './components/RealmsCommunity';
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
      <Section>
        <DAOStructures />
        <RealmsCommunity />
      </Section>
      <Section bgColor='bg-spl-gov bg-cover md:bg-[#292833] md:bg-none '>
        <SPLGov />
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
};

export default Realms;
