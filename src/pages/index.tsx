import DAOStructures from '@/components/DAOStructures';
import Footer from '@/components/Footer';
import Introduction from '@/components/Introduction';
import ManagingDAOs from '@/components/ManagingDAOs';
import Metrics from '@/components/Metrics';
import NavBar from '@/components/NavBar';
import RealmsCommunity from '@/components/RealmsCommunity';
import SolanaStandard from '@/components/SolanaStandard';

const Index = () => {
  return (
    <main>
      <NavBar />
      <Introduction />
      <Metrics />
      <ManagingDAOs />
      <DAOStructures />
      <RealmsCommunity />
      <SolanaStandard />
      <Footer className='mt-12 mb-48 w-full sm:mt-48' />
    </main>
  );
};

export default Index;
