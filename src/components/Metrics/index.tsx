import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import CommunitiesThriving from '@/components/Metrics/CommunitiesThriving';
import DeeperIntegrations from '@/components/Metrics/DeeperIntegrations';
import GrowingValue from '@/components/Metrics/GrowingValue';

export default function Metrics() {
  return (
    <div className='bg-nightgrey'>
      <CenteredContent
        className={clsxm(
          'flex-col',
          'flex-wrap',
          'flex',
          'gap-16',
          'gap-x-16',
          'gap-y-16',
          'justify-center',
          'py-8',
          'md:flex-row',
          'md:py-[50px]',
          'xl:py-[40px]',
          'xl:justify-between'
        )}
      >
        <GrowingValue />
        <CommunitiesThriving />
        <DeeperIntegrations />
      </CenteredContent>
    </div>
  );
}
