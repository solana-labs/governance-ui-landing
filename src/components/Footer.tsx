import ReadTheDocsLink from './Link';
import { NavContent } from './NavBar';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <div className='max-w-[1440px] pt-6 pb-20 md:pt-20 md:pb-28 xl:pt-44 xl:pb-32'>
      <NavContent>
        <div className='hidden sm:block'>
          <SocialIcons />
        </div>
        <div>
          <ReadTheDocsLink />
        </div>
      </NavContent>
      <div className='my-6 flex items-center justify-center sm:hidden'>
        <SocialIcons />
      </div>
      <div className='mt-5 flex flex-wrap justify-center space-x-2 text-sm opacity-70 md:mt-8'>
        <a href=''>© 2022 Realms</a>
        <span>|</span>
        <a href=''>Security</a>
        <span>|</span>
        <a href=''>Your Privacy</a>
        <span>|</span>
        <a href=''>Terms</a>
      </div>
    </div>
  );
}
