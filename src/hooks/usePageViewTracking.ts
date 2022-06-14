import { useEffect } from 'react';

import mixpanel from '@/lib/mixpanel';

export default function usePageViewTracking(name: string) {
  useEffect(() => {
    mixpanel.track('view_page', { name, app: 'marketing' });
  }, [name]);
}
