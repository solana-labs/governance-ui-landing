import clsxm from '@/lib/clsxm';

import CenteredContent from '@/components/CenteredContent';
import CommunitiesThriving from '@/components/Metrics/CommunitiesThriving';
import DeeperIntegrations from '@/components/Metrics/DeeperIntegrations';
import GrowingValue from '@/components/Metrics/GrowingValue';

const ITEM_STYLES = '';

export default function Metrics() {
  return (
    <div className='bg-[#201F27]'>
      <CenteredContent
        className={clsxm(
          'flex-col',
          'flex',
          'py-8',
          'justify-between',
          'gap-16',
          'md:py-[50px]',
          'xl:flex-row',
          'xl:py-[40px]'
        )}
      >
        <GrowingValue className={ITEM_STYLES} />
        <CommunitiesThriving className={ITEM_STYLES} />
        <DeeperIntegrations className={ITEM_STYLES} />
      </CenteredContent>
    </div>
  );
}
