import Header from './Header';

type InfoProps = {
  imgSrc: string;
  title: string;
  children: React.ReactNode;
};

export const IconInfoBox = ({ imgSrc, title, children }: InfoProps) => {
  return (
    <div className='flex items-start space-x-4 md:flex-col md:space-x-0'>
      <img
        src={`/icons/${imgSrc}.png`}
        className='mt-1 h-[42px] md:mt-2 md:mb-4 lg:h-12'
        alt='icon'
      />
      <div>
        <Header as='h4' className='mb-2 md:mb-4'>
          {title}
        </Header>
        <div className='pr-8 text-sm opacity-70 md:pr-0'>{children}</div>
      </div>
    </div>
  );
};
