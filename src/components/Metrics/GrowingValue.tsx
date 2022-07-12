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
          Growing value
        </Header>
      </div>
      <Content className='mb-3'>
        <Header as='h3'>$</Header>
        <Header>550,055,971</Header>
      </Content>
      <Text>Total USD amount across DAO treasuries as of Jul 11, 2022</Text>
    </Section>
  );
}
