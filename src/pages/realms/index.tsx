import DAOStructures from '@/components/DAOStructures';
import Introduction from '@/components/Introduction';
import ManagingDAOs from '@/components/ManagingDAOs';
import Metrics from '@/components/Metrics';
import RealmsCommunity from '@/components/RealmsCommunity';

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
      <RealmsCommunity />
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
