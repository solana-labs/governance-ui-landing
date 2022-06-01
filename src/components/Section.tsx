type RealmsProps = {
  bgColor?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Section = ({
  bgColor = 'bg-background',
  className = 'mx-auto w-full max-w-[1440px] px-4 md:px-5 lg:w-5/6 lg:px-0 xl:px-20',
  children,
}: RealmsProps) => {
  return (
    <div className={`w-full ${bgColor} relative`}>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Section;
