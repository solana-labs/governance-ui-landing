import React, { useEffect, useRef } from 'react';

import mixpanel from '@/lib/mixpanel';

interface Props {
  children?: React.ReactNode;
  name: string;
}

export default function TrackViewportEnter(props: Props) {
  const observer = useRef<IntersectionObserver | null>(null);
  const alreadyTracked = useRef(false);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof IntersectionObserver !== 'undefined' &&
      container.current
    ) {
      observer.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          // The IntersectionObserver's callback is modelled after a single
          // observer watching multiple entries. For our purposes, this is
          // hard to fit into how we're using it; we create a new observer
          // with each component. Regardless, the callback will still return an
          // array of entries, so we need to handle that.
          for (const entry of entries) {
            if (
              entry.target === container.current &&
              entry.isIntersecting &&
              !alreadyTracked.current
            ) {
              mixpanel.track('enter_viewport', {
                name: props.name,
                app: 'marketing',
              });

              // Only fire a tracking event once
              alreadyTracked.current = true;
            }
          }
        }
      );

      observer.current.observe(container.current);
    }

    return () => {
      // Since we create a new observer per component, instead of trying to
      // unobserve the container, we can safely just disconnect the entire
      // observer.
      observer.current?.disconnect();
    };
  }, [container, alreadyTracked, props.name]);

  return <div ref={container}>{props.children}</div>;
}
