import {
  CreateDaoButton,
  EnterAppButton,
  ReadTheDocsButton,
} from '@/components/Button';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function SolanaTooling() {
  return (
    <Hero>
      <div className='text-center md:text-left'>
        <Header as='h1'>
          Tooling to help your <br />
          community thrive on Solana
        </Header>
        <div className='mt-4 mb-11 text-center text-base opacity-70 md:mb-14 md:text-left'>
          DAO creation, voting, and treasury management, all in one fully
          on-chain product. Whether managing a multisig or a billion dollar
          protocol, Realms has the tools and integrations to enable your
          community to reach its full potential.
        </div>
      </div>
      <div className='space-y-4 pb-12 text-center md:pb-24 md:text-left'>
        <div>
          <EnterAppButton inNavBar={false} />
          <br className='md:hidden' />
          <CreateDaoButton />
        </div>
        <div className='block md:hidden'>
          <ReadTheDocsButton />
        </div>
      </div>
    </Hero>
  );
}
