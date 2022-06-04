import DAOStructures from '@/components/DAOStructures';
import Introduction from '@/components/Introduction';
import ManagingDAOs from '@/components/ManagingDAOs';
import Metrics from '@/components/Metrics';

import RealmsCommunity from './components/RealmsCommunity';
import RealmsCommunity1 from './components/RealmsCommunity1';
import SPLGov from './components/SPLGov';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Section from '../../components/Section';

const Realms = () => {
  return (
    <div className='landing-page relative'>
      <NavBar />
      <Introduction />
      <Metrics />
      <ManagingDAOs />
      <DAOStructures />
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
