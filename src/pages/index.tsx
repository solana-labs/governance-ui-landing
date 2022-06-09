import usePageViewTracking from '@/hooks/usePageViewTracking';

import DAOStructures from '@/components/DAOStructures';
import Footer from '@/components/Footer';
import Introduction from '@/components/Introduction';
import ManagingDAOs from '@/components/ManagingDAOs';
import Metrics from '@/components/Metrics';
import NavBar from '@/components/NavBar';
import RealmsCommunity from '@/components/RealmsCommunity';
import SolanaStandard from '@/components/SolanaStandard';
import TrackViewportEnter from '@/components/TrackViewportEnter';

const Index = () => {
  usePageViewTracking('index');

  return (
    <main>
      <NavBar />
      <TrackViewportEnter name='introduction'>
        <Introduction />
      </TrackViewportEnter>
      <TrackViewportEnter name='metrics'>
        <Metrics />
      </TrackViewportEnter>
      <TrackViewportEnter name='managing_daos'>
        <ManagingDAOs />
      </TrackViewportEnter>
      <TrackViewportEnter name='dao_structures'>
        <DAOStructures trackingContext='index_dao_structures' />
      </TrackViewportEnter>
      <TrackViewportEnter name='realms_community'>
        <RealmsCommunity />
      </TrackViewportEnter>
      <TrackViewportEnter name='solana_standard'>
        <SolanaStandard />
      </TrackViewportEnter>
      <TrackViewportEnter name='footer'>
        <Footer className='mt-12 mb-36 w-full px-[20px] sm:my-24 sm:gap-x-40 md:px-24 lg:px-24' />
      </TrackViewportEnter>
    </main>
  );
};

export default Index;
