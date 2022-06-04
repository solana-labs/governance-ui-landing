import DAOStructures from '@/components/DAOStructures';
import Introduction from '@/components/Introduction';
import ManagingDAOs from '@/components/ManagingDAOs';
import Metrics from '@/components/Metrics';
import NavBar from '@/components/NavBar';

const Index = () => {
  return (
    <main className='landing-page'>
      <NavBar />
      <Introduction />
      <Metrics />
      <ManagingDAOs />
      <DAOStructures />
    </main>
  );
};

export default Index;
