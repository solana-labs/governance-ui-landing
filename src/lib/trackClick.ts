import mixpanel from '@/lib/mixpanel';

export default function trackClick(target: string, context: string) {
  mixpanel.track(
    'click',
    { context, target, app: 'marketing' },
    { transport: 'sendBeacon' }
  );
}
