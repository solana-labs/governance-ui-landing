import DAOStructures from './components/DAOStructures';
import ManagingDAO from './components/ManagingDAO';
import Metrics from './components/Metrics';
import RealmsCommunity from './components/RealmsCommunity';
import SolanaTooling from './components/SolanaTooling';
import SPLGov from './components/SPLGov';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Section from '../../components/Section';
import TestComponents from '../../components/TestComponents';

const Realms = () => {
  return (
    <div className='landing-page relative'>
      <NavBar />
      <SolanaTooling />
      <Section bgColor='bg-nightgrey'>
        <Metrics />
        <ManagingDAO />
      </Section>
      <Section>
        <DAOStructures />
        <RealmsCommunity />
        <SPLGov />
        <Footer />
        <TestComponents />
      </Section>
    </div>
  );
};

export default Realms;
