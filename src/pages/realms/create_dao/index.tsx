// import Hero from 'components_2/Hero'
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Section from '@/components/Section';

import { ListOfDAOTypes } from '../components/DAOStructures';

export default function CreateDaoPage() {
  return (
    <div className='landing-page relative bg-background'>
      <NavBar />
      <Section className='ld:mt-28 mx-auto mt-16 mb-24 w-full max-w-[1440px] px-5 md:mt-20 md:mb-20 md:px-24 lg:mb-60 xl:px-8'>
        <div className='w-full py-16 md:pt-24 md:pb-28'>
          <Header as='h2' className='mr-12 text-left'>
            What type of DAO <br />
            would you like to create?
          </Header>
          <ListOfDAOTypes />
        </div>
      </Section>
    </div>
  );
}
