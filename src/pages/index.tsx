import DAOStructures from '@/components/DAOStructures';
import Introduction from '@/components/Introduction';
import ManagingDAOs from '@/components/ManagingDAOs';
import Metrics from '@/components/Metrics';
import NavBar from '@/components/NavBar';
import RealmsCommunity from '@/components/RealmsCommunity';
import SolanaStandard from '@/components/SolanaStandard';

const Index = () => {
  return (
    <main className='landing-page'>
      <NavBar />
      <Introduction />
      <Metrics />
      <ManagingDAOs />
      <DAOStructures />
      <RealmsCommunity />
      <SolanaStandard />
    </main>
  );
};

export default Index;
