import Header from '@/components/Header';
import Text from '@/components/Text';
import Tooltip from '@/components/Tooltip';

import Content from './Content';
import Section from './Section';

const DAOS = [
  { src: '/assets/dao/blue-uxd.png', title: 'UXDProtocol' },
  { src: '/assets/dao/blue-mango.png', title: 'Mango DAO' },
  { src: '/assets/dao/blue-helium.png', title: 'Helium' },
  { src: '/assets/dao/blue-dual.png', title: 'DUAL' },
  { src: '/assets/dao/blue-psy.png', title: 'PsyFinance' },
  { src: '/assets/dao/blue-grape.png', title: 'GRAPE' },
  { src: '/assets/dao/blue-monke.png', title: 'MonkeDAO' },
  { src: '/assets/dao/blue-ukraine.png', title: 'Ukraine.SOL' },
] as const;

interface Props {
  className?: string;
}

export default function CommunitiesThriving(props: Props) {
  return (
    <Section className={props.className}>
      <div className='mb-5'>
        <Header className='bold' as='h4' withGradientPurple>
          Communities thriving
        </Header>
      </div>
      <Content className='mb-3'>
        <div className='flex -space-x-4'>
          {DAOS.map((dao) => (
            <Tooltip text={dao.title} key={dao.src}>
              {/* Tooltips rely on :before and :after pseudo-elements to
                  render. Unforunately, those don't seem to work on image tags,
                  so we need to wrap each image in a div */}
              <div>
                <img
                  alt={dao.title}
                  className='h-[60px] w-[60px] rounded-full'
                  src={dao.src}
                  style={{
                    // The default shadows from tailwind don't work well for these
                    // icons. Since these are a one off usage, we'll just define
                    // them as an inline style
                    boxShadow: `
                      0px 9px 8px rgba(0, 0, 0, 0.3),
                      inset 0px 1px 1px rgba(255, 255, 255, 0.1),
                      inset 0px 2px 3px rgba(255, 255, 255, 0.06)
                    `,
                  }}
                />
              </div>
            </Tooltip>
          ))}
        </div>
      </Content>
      <Text>UXD, Mango, Helium & 800+ more DAOs</Text>
    </Section>
  );
}
