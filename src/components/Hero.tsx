import Image from 'next/image';

import Section from './Section';

type HeroProps = {
  backgroundColor?: string;
  backgroundImgSrc?: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Hero({
  backgroundColor = 'bg-background',
  backgroundImgSrc = '/backgrounds/landing-hero-desktop.png',
  height = 'h-[560px] md:h-[600px]',
  className = 'md:pt-50 pt-40',
  children,
}: HeroProps) {
  return (
    <div className={`${backgroundColor}`}>
      <div className={`absolute w-full ${height}`}>
        <Image
          alt='hero image'
          src={backgroundImgSrc}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className={className}>
        <Section bgColor='bg-transparent'>{children}</Section>
      </div>
    </div>
  );
}
