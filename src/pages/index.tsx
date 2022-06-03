import Introduction from '@/components/Introduction';
import Metrics from '@/components/Metrics';
import NavBar from '@/components/NavBar';

const Index = () => {
  return (
    <main className='landing-page'>
      <NavBar />
      <Introduction />
      <Metrics />
    </main>
  );
};

export default Index;
