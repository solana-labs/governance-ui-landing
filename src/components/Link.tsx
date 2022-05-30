import Link from 'next/link';

import { Icon } from './Button';
import Text from './Text';

export const ReadTheDocsLink = () => {
  return (
    <div className='w-fit transition-all duration-300 hover:border-b hover:opacity-70 active:opacity-50'>
      <Link href='/realms'>
        <a>
          <div className='relative flex items-center justify-center'>
            <Icon
              img='external-link-thin-white'
              className='starting-image mr-2'
              alt='External link icon'
            />
            <Text as='p1'>Read the Docs</Text>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default ReadTheDocsLink;
