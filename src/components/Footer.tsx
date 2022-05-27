import { ReadTheDocsButton } from './Button';
import ReadTheDocsLink from './Link';
import { NavContent } from './NavBar';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <div className='pt-6 pb-10 md:py-12'>
      <NavContent>
        <ReadTheDocsButton />
      </NavContent>
      <div className='mt-8 flex max-w-[1440px] justify-center'>
        <SocialIcons />
      </div>
      <br />
      <br />
      <br />
      <ReadTheDocsLink />
      {/* <div className='mx-4 mt-5 max-w-[1440px] sm:mt-4 md:mx-auto md:border-0 md:px-4'> */}
      {/* <div className='mt-5 inline-flex flex-wrap justify-center space-x-2 text-sm opacity-70'> */}
      <div className='mx-4 mt-5 flex max-w-[1440px] flex-wrap justify-center space-x-2 text-sm opacity-70 md:mt-8 '>
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
