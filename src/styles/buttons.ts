import clsxm from '@/lib/clsxm';

export const BASE_STYLES = clsxm(
  'duration-300',
  'flex',
  'font-serif',
  'group',
  'items-center',
  'relative',
  'rounded-full',
  'text-base',
  'transition-all',
  'z-0',
  'disabled:bg-white/40',
  'disabled:text-black',
  'focus:opacity-100',
  'hover:cursor-pointer'
);

export const GRADIENT = clsxm(
  'border-none',
  'bg-gradient-to-r',
  'from-[#00C2FF]',
  'opacity-[.84]',
  'px-11',
  'py-5',
  'text-black',
  'to-[#87F2FF]',
  'transition-to-white-background',
  'via-[#00E4FF]',
  'active:opacity-70',
  'hover:opacity-100'
);

export const DARK = clsxm(
  'bg-black',
  'opacity-[.84]',
  'p-6',
  'active:opacity-70',
  'focus:bg-white',
  'focus:text-black',
  'hover:bg-white',
  'hover:text-black'
);

export const PRIMARY = clsxm(
  'bg-white',
  'text-black',
  'border-none',
  'px-11',
  'py-5',
  'active:bg-white/50',
  'hover:bg-white/70',
  'focus:bg-white/70'
);

export const SECONDARY = clsxm(
  'border-white/30',
  'border',
  'px-11',
  'py-5',
  'text-white',
  'active:bg-white/70',
  'active:text-black',
  'focus:bg-white',
  'focus:text-black',
  'hover:bg-white',
  'hover:text-black'
);

export const TERTIARY_WRAPPER = clsxm(
  'group',
  'px-11',
  'py-5',
  'active:opacity-50',
  'focus:opacity-[.70]',
  'hover:opacity-[.70]'
);

export const TERTIARY = clsxm(
  'border-b',
  'border-transparent',
  'flex',
  'items-center',
  'justify-center',
  'transition',
  'group-focus:border-white/70',
  'group-hover:border-white/70'
);
