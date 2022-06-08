import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_CLIENT_TOKEN || '', {
  api_host: '/api/events',
});

export default mixpanel;
