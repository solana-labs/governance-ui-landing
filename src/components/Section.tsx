type RealmsProps = {
  bgColor?: string;
  children?: React.ReactNode;
};

export const Section = ({
  bgColor = 'bg-background',
  children,
}: RealmsProps) => {
  return (
    <div className={`w-full ${bgColor} relative`}>
      <div className='mx-auto w-full max-w-[1440px] px-4 md:px-5 lg:w-5/6 lg:px-0 xl:px-20'>
        {children}
      </div>
    </div>
  );
};

export default Section;
