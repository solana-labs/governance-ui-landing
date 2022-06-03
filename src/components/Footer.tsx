import Logo from '@/components/Logo';

import ReadTheDocsLink from './Link';
import SocialIcons from './SocialIcons';

type NavBarProps = {
  children: React.ReactNode;
};

export const NavContent = ({ children }: NavBarProps) => {
  return (
    <div className='mx-auto flex max-w-[1440px] items-center justify-between'>
      <Logo />
      {children}
    </div>
  );
};

const Hyperlinks = () => {
  return (
    <div className='mt-5 flex flex-wrap justify-center space-x-2 text-sm opacity-70 md:mt-8'>
      <a href=''>© 2022 Realms</a>
      <span>|</span>
      <a href=''>Your Privacy</a>
      <span>|</span>
      <a href=''>Terms</a>
    </div>
  );
};

export default function Footer() {
  return (
    <div className='max-w-[1440px] pt-6 pb-20 md:pt-20 md:pb-28 xl:pt-44 xl:pb-32'>
      <NavContent>
        <div className='mt-[38px] hidden flex-col items-center sm:flex'>
          <SocialIcons />
          <Hyperlinks />
        </div>
        <ReadTheDocsLink />
      </NavContent>
      <div className='my-6 flex flex-col items-center justify-center sm:hidden'>
        <SocialIcons />
        <Hyperlinks />
      </div>
    </div>
  );
}
