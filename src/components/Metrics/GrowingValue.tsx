import Header from '@/components/Header';
import Text from '@/components/Text';

import Content from './Content';
import Section from './Section';

interface Props {
  className?: string;
}

export default function GrowingValue(props: Props) {
  return (
    <Section className={props.className}>
      <div className='mb-5'>
        <Header className='bold' as='h4' withGradientPurple>
          Growing Value
        </Header>
      </div>
      <Content className='mb-3'>
        <Header as='h3'>$</Header>
        <Header>946,355,781</Header>
      </Content>
      <Text>Total USD amount across DAO treasuries</Text>
    </Section>
  );
}
