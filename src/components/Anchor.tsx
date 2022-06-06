import { forwardRef } from 'react';

import { createAnchor } from '@/lib/buttons';

import * as buttonStyles from '@/styles/buttons';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Gradient = createAnchor(buttonStyles.GRADIENT);

export const Dark = createAnchor(buttonStyles.DARK);

export const Primary = createAnchor(buttonStyles.PRIMARY);

export const Secondary = createAnchor(buttonStyles.SECONDARY);

const TertiaryWrapper = createAnchor(buttonStyles.TERTIARY_WRAPPER);

export const Tertiary = forwardRef<HTMLAnchorElement, AnchorProps>(
  (props: AnchorProps, ref) => {
    const { className, children, ...rest } = props;

    return (
      <TertiaryWrapper className={className} {...rest} ref={ref}>
        <div className={buttonStyles.TERTIARY}>{children}</div>
      </TertiaryWrapper>
    );
  }
);
