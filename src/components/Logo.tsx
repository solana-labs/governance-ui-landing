import Link from 'next/link';

import Text from '@/components/Text';

export default function RealmsLogo() {
  return (
    <Link href='/'>
      <div className='flex cursor-pointer items-center space-x-1 hover:brightness-110'>
        <img
          src='/icons/realms-logo.svg'
          className='h-8 w-8'
          alt='Realms Logo'
        />
        <Text as='p1'>Realms</Text>
      </div>
    </Link>
  );
}
