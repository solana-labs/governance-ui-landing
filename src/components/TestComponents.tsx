import * as Button from '@/components/Button';
import Icon from '@/components/Icon';

import Header from './Header';

const HeaderText = () => {
  return (
    <div className='landing-page relative'>
      <br />
      <br />
      <hr />
      <hr />
      <br />
      <br />
      <Header as='h1' className=''>
        I am H1
      </Header>
      <Header as='h2' className=''>
        I am H2
      </Header>
      <Header as='h3' className=''>
        I am H3
      </Header>
      <Header as='h4' className=''>
        I am H4
      </Header>
      <Header as='h5' className=''>
        I am H5
      </Header>
      <Header as='h6' className=''>
        I am H6
      </Header>
      <br />
      <br />
      <hr />
      <hr />
      <br />
      <br />
      <Button.Gradient>
        Enter App <Icon className='ml-2' img='arrow-thin-black' alt='Arrow' />
      </Button.Gradient>
      <br />
      <br />
      <Button.Secondary>Create a DAO</Button.Secondary>
      <br />
      <br />
      <Button.Secondary>
        <Icon
          img='external-link-thin-white'
          className='mr-4 transition-all group-hover:invert group-focus:invert'
          alt='External link icon'
        />
        Read about SPL Governance
      </Button.Secondary>
      <br />
      <br />
      <Button.Tertiary className='block sm:hidden'>
        <Icon
          img='external-link-thin-white'
          className='mr-2'
          alt='External link icon'
        />{' '}
        Read the docs
      </Button.Tertiary>
      <br />
      <br />
      <Button.Dark className='w-full justify-between'>
        Create a Multisig Wallet{' '}
        <Icon img='arrow-thin-blue' className='ml-4' alt='Arrow' />
      </Button.Dark>
      <br />
      <br />
      <hr />
      <hr />
      <br />
      <br />
    </div>
  );
};

export default HeaderText;
