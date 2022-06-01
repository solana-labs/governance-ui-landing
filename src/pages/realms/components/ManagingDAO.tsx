import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { IconInfoBox } from '@/components/IconInfoBox';

export default function ManagingDAO() {
  return (
    <Hero
      backgroundImgSrc='/backgrounds/managing-dao.png'
      className='pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32'
    >
      <div className='flex flex-wrap'>
        <div className=' w-full text-center md:pr-4 lg:text-left'>
          <Header as='h2' className='mb-16 px-20 md:mb-16 lg:mb-20 xl:px-0'>
            Managing your DAO
            <br className='hidden md:block lg:hidden' /> on Realms
          </Header>
        </div>
        <div className='flex w-full flex-col space-y-12 md:grid md:grid-cols-2 md:gap-16 md:space-y-0 lg:grid-cols-3 lg:gap-24 lg:space-y-0'>
          <div>
            <IconInfoBox imgSrc='solana-logo' title='SPL Governance'>
              Powering Realms, SPL Governance is a standard for creating and
              managing DAOs. Asset and DAO type agnostic, it provides tlg
              building blocks to support your DAO.
              <div>
                <a
                  href=''
                  className='hover:text-realms-theme-blue mt-3 inline-block text-xs underline opacity-50 hover:opacity-90 active:text-white'
                >
                  Learn More
                </a>
              </div>
            </IconInfoBox>
          </div>
          <IconInfoBox imgSrc='treasury' title='Treasury Management'>
            Earn yield, stake your treasury, and decide as a community on
            resource allocation.
          </IconInfoBox>
          <IconInfoBox imgSrc='integrations' title='3rd Party Integrations'>
            Leverage 10+ integrations across notifications, DeFi / staking, and
            identity to enhance your DAO.
          </IconInfoBox>
          <IconInfoBox imgSrc='customizable' title='Fully Customizable'>
            Use the shared SPL Governance instance, or use your own for full
            control and immutability. Clone Realms to create your own DAO
            frontend. The power is in your hands.
          </IconInfoBox>
          <IconInfoBox
            imgSrc='vetokens'
            title='Vote Escrowed Tokens (veTokens) '
          >
            Increase voting weight within your DAO. Lock tokens for a fixed
            duration, indefinitely, or on a vesting schedule.
          </IconInfoBox>
          <IconInfoBox imgSrc='advantage' title='Solana Advantage'>
            {`Enjoy near-zero fees in a fully on-chain product that contains the
            features and integrations to meet your DAO's needs.`}
          </IconInfoBox>
        </div>
      </div>
    </Hero>
  );
}
