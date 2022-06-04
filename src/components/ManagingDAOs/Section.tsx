import clsxm from '@/lib/clsxm';

import Header from '@/components/Header';
import Text from '@/components/Text';

interface Props {
  className?: string;
  content: string;
  footer?: React.ReactNode;
  icon: string;
  title: React.ReactNode;
}

export default function Section(props: Props) {
  return (
    <section
      className={clsxm(
        props.className,
        'flex-row',
        'flex',
        'gap-x-6',
        'gap-y-10',
        'items-start',
        'justify-start',
        'md:flex-col'
      )}
    >
      <img src={props.icon} className='h-[42px] lg:h-12' alt={props.content} />
      <div className='w-[267px] md:w-[344px]'>
        <Header as='h4' className='mb-2 md:mb-4'>
          {props.title}
        </Header>
        <Text withOpacity>{props.content}</Text>
        {props.footer && <div className='mt-2'>{props.footer}</div>}
      </div>
    </section>
  );
}
