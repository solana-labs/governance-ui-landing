import Image from 'next/image';

import useIsExtensionWidth from './Utils';

type BackgroundProps = {
  backgroundImgSrcMobile: string;
  backgroundImgSrcDesktop: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
};

export default function Background({
  backgroundImgSrcMobile,
  backgroundImgSrcDesktop,
  // width,
  // height,
  width = '3096',
  height = '1108',
  // className,
  children,
}: BackgroundProps) {
  const isExtensionWidth = useIsExtensionWidth({ width: '640' });

  return (
    <div className='relative w-full'>
      <Image
        alt='background image'
        src={
          isExtensionWidth ? backgroundImgSrcMobile : backgroundImgSrcDesktop
        }
        // src={
        //   isExtensionWidth ? backgroundImgSrcDesktop : backgroundImgSrcMobile
        // }
        layout='responsive'
        // layout='fill'
        // objectFit='cover'
        objectFit='scale-down'
        quality={100}
        width={width}
        height={height}
      />
      <div className='absolute top-0'>
        {/* <div className={className}> */}
        {children}
      </div>
    </div>
  );
}
