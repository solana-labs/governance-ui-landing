import DAOStructures from '@/components/DAOStructures';
import Introduction from '@/components/Introduction';
import ManagingDAOs from '@/components/ManagingDAOs';
import Metrics from '@/components/Metrics';
import NavBar from '@/components/NavBar';
import RealmsCommunity from '@/components/RealmsCommunity';

const Index = () => {
  return (
    <main className='landing-page'>
      <NavBar />
      <Introduction />
      <Metrics />
      <ManagingDAOs />
      <DAOStructures />
      <RealmsCommunity />
    </main>
  );
};

export default Index;
