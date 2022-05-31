import { useMediaQuery } from 'react-responsive';

type WidthProps = {
  width: string;
};

export default function useIsExtensionWidth({ width }: WidthProps) {
  return useMediaQuery({ query: `(max-width: ${width}px)` });
}
