import Header from '@/components/Header';
import Text from '@/components/Text';
import Tooltip from '@/components/Tooltip';

import Content from './Content';
import Section from './Section';

const INTEGRATIONS = [
  { src: '/assets/dao/integration-mango.png', title: 'Mango' },
  { src: '/assets/dao/integration-marinade.png', title: 'Marinade' },
  { src: '/assets/dao/integration-solend.png', title: 'Solend' },
  { src: '/assets/dao/integration-cardinal.png', title: 'Cardinal' },
  { src: '/assets/dao/integration-serum.png', title: 'Serum' },
  { src: '/assets/dao/integration-friktion.png', title: 'Friktion' },
  { src: '/assets/dao/integration-notifi.png', title: 'Notifi' },
  { src: '/assets/dao/integration-dialect.png', title: 'Dialect' },
] as const;

interface Props {
  className?: string;
}

export default function DeeperIntegrations(props: Props) {
  return (
    <Section className={props.className}>
      <div className='mb-5'>
        <Header className='bold' as='h4' withGradientPurple>
          Deeper integrations
        </Header>
      </div>
      <Content className='mb-3'>
        <div className='-ml-2 flex -space-x-8'>
          {INTEGRATIONS.map((integration) => (
            <Tooltip text={integration.title} key={integration.src}>
              {/* Tooltips rely on :before and :after pseudo-elements to
                  render. Unforunately, those don't seem to work on image tags,
                  so we need to wrap each image in a div */}
              <div>
                <img
                  alt={integration.title}
                  className='h-[60px] w-[60px]'
                  src={integration.src}
                />
              </div>
            </Tooltip>
          ))}
        </div>
        <div className='ml-1'>& more</div>
      </Content>
      <Text>Staking, Identity, Defi & Notifications</Text>
    </Section>
  );
}
