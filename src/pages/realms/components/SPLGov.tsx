import Background from '@/components/Background';
import * as Button from '@/components/Button';
import Header from '@/components/Header';
import Icon from '@/components/Icon';
import Text from '@/components/Text';

const SplGov = () => {
  return (
    <Background
      backgroundImgSrcMobile='/backgrounds/spl-gov-mobile.png'
      backgroundImgSrcDesktop='/backgrounds/spl-gov-desktop.png'
      // width={1548}
      // height={916}
    >
      <div className='rounded border pt-14 pb-14 md:px-16 md:pb-[90px] md:pt-12'>
        <div className='flex items-center justify-start'>
          <Text as='p1'>The</Text>
          <div>
            <img
              src='/icons/logo-solana-text.png'
              className='mx-2 h-4'
              alt=''
            />
          </div>
          <Text as='p1'>Standard</Text>
        </div>
        <Header as='h2' className='pt-10 pb-6 md:pt-14 md:pb-9'>
          SPL Governance
        </Header>
        <div className='mb-3 w-full space-y-6 md:mb-[45px] xl:mb-[36px] xl:w-4/6'>
          <Text as='p1'>
            SPL Governance is a program the chief purpose of which is to provide
            core building blocks and primitives to create Decentralized
            Autonomous Organizations (DAOs) on Solana blockchain.
            <br />
            <br />
            The program is DAO type and asset type agnostic and can be used to
            build any type of DAOs which can own and manage any type of assets.
          </Text>
        </div>
        <Button.Secondary>
          <Icon
            img='external-link-thin-white'
            className='mr-4 transition-all group-hover:invert group-focus:invert'
            alt='External link icon'
          />
          Read about SPL Governance
        </Button.Secondary>
      </div>
    </Background>
  );
};

export default SplGov;
