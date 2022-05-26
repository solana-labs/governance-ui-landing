import Link from 'next/link';
import { FunctionComponent } from 'react';

type ImgProps = {
  img: string;
  className: string;
  alt: string;
};

const Icon = ({ img, className, alt }: ImgProps) => {
  return (
    <img
      src={`/icons/${img}.png`}
      className={className}
      width={16}
      height={16}
      alt={alt}
    />
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  secondary?: boolean;
  icon?: boolean;
  tertriary?: boolean;
  selector?: boolean;
  withBorder?: boolean;
  children: React.ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({
  secondary = false,
  icon = false,
  selector = false,
  tertriary = false,
  className = '',
  children,
  ...props
}) => {
  let classNames = `z-0 relative transition-all duration-300 rounded-full font-serif font-medium text-[16px] md:text-[18px] hover:cursor-pointer opacity-[84] hover:opacity-100 focus:border focus:border-white disabled:bg-white/40 disabled:text-black `;

  if (secondary && !icon) {
    // (Create DAO)
    classNames +=
      'py-3 px-2 h-[64px] w-[208px] text-white border border-white/30 hover:bg-white hover:text-black active:bg-white/70 active:text-black';
  } else if (secondary && icon) {
    // (About SPL)
    classNames +=
      'py-3 px-2 h-[56px] md:h-[64px] w-[335px] text-white border border-white/30 hover:bg-white hover:text-black active:bg-white/70 active:text-black';
  } else if (tertriary) {
    // (Read Docs)
    classNames +=
      'py-3 px-2 h-[64px] w-[208px] hover:bg-white/10 active:bg-white/70 active:text-black';
  } else if (selector) {
    //  (Select DAO Type)
    classNames +=
      'py-3 px-7 h-[64px] w-[295px] md:w-[366px] bg-black hover:bg-white hover:text-black active:opacity-70 ';
  } else {
    // primary (Enter App)
    classNames += `text-black bg-gradient-to-r from-[#00C2FF] via-[#00E4FF] to-[#87F2FF] transition-to-white-background active:opacity-70`;
  }

  classNames += ` ${className}`;

  return (
    <button className={classNames} {...props}>
      <div>{children}</div>
    </button>
  );
};

export default Button;

export const EnterAppButton = ({ inNavBar = true }) => {
  return (
    <Button>
      <Link href='/realms'>
        <div
          className={`flex items-center justify-center ${
            inNavBar
              ? 'h-[48px] w-[148px] md:h-[64px] md:w-[208px]'
              : 'h-[64px] w-[208px]'
          }`}
        >
          <div className='pr-4'>Enter App</div>
          <img
            src='/icons/arrow-thin-black.png'
            className='h-4 w-4'
            alt='arrow'
          />
        </div>
      </Link>
    </Button>
  );
};

export const CreateDaoButton = () => {
  return (
    <Button secondary>
      <Link href='/solana/create_dao'>
        <div className='flex items-center justify-center px-4'>
          <div className='pr-2'>Create DAO</div>
        </div>
      </Link>
    </Button>
  );
};

export const ReadTheDocsButton = () => {
  return (
    <Button tertriary className='change-image-on-active'>
      <Link href=''>
        <div className='relative flex items-center justify-center'>
          <Icon
            img='external-link-thin-white'
            className='starting-image'
            alt='External link icon'
          />
          <Icon
            img='external-link-thin-black'
            className='active-image'
            alt='External link icon'
          />
          <div className='ml-3 pr-2'>Read the Docs</div>
        </div>
      </Link>
    </Button>
  );
};

type SelectProps = {
  href: string;
  text: string;
};

export const SelectDaoToCreate = ({ href, text }: SelectProps) => {
  return (
    <Button selector className='change-image-on-hover'>
      <Link href={href}>
        <div className='flex items-center justify-between'>
          <div className='pr-2'>{text}</div>
          <Icon img='arrow-thin-blue' className='starting-image' alt='Arrow' />
          <Icon img='arrow-thin-black' className='hover-image' alt='Arrow' />
        </div>
      </Link>
    </Button>
  );
};
export const AboutSplButton = () => {
  return (
    <Button secondary icon className='change-image-on-hover'>
      <div className='relative flex items-center justify-center px-4'>
        <Icon
          img='external-link-thin-white'
          className='starting-image mr-3'
          alt='External link icon'
        />
        <Icon
          img='external-link-thin-black'
          className='hover-image mr-3'
          alt='External link icon'
        />
        <div className='pr-2'>Read about SPL Governance</div>
      </div>
    </Button>
  );
};
