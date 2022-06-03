import { createButton } from '@/lib/buttons';

import * as buttonStyles from '@/styles/buttons';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Gradient = createButton(buttonStyles.GRADIENT);

export const Dark = createButton(buttonStyles.DARK);

export const Primary = createButton(buttonStyles.PRIMARY);

export const Secondary = createButton(buttonStyles.SECONDARY);

const TertiaryWrapper = createButton(buttonStyles.TERTIARY_WRAPPER);

export const Tertiary = (props: ButtonProps) => {
  const { className, children, ...rest } = props;

  return (
    <TertiaryWrapper className={className} {...rest}>
      <div className={buttonStyles.TERTIARY}>{children}</div>
    </TertiaryWrapper>
  );
};
