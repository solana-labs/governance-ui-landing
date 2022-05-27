import Link from 'next/link';

import { Icon } from './Button';

export const ReadTheDocsLink = () => {
  return (
    // <div className='change-image-on-active'>
    <Link href='/realms'>
      <a>
        <div className='relative flex items-center justify-center border-b hover:underline hover:opacity-70 active:opacity-50'>
          <Icon
            img='external-link-thin-white'
            className='starting-image'
            alt='External link icon'
          />
          {/* <Icon
              img='external-link-thin-black'
              className='active-image'
              alt='External link icon'
            /> */}
          <div className='text-base text-white transition-all duration-300'>
            Read the Docs
          </div>
        </div>
      </a>
    </Link>
    // </div>
  );
};
export default ReadTheDocsLink;
