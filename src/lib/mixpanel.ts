import mixpanel, { OverridedMixpanel } from 'mixpanel-browser';

if (process.env.NEXT_PUBLIC_MIXPANEL_CLIENT_TOKEN) {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_CLIENT_TOKEN || '', {
    api_host: '/api/mp',
  });
}

export default process.env.NEXT_PUBLIC_MIXPANEL_CLIENT_TOKEN
  ? mixpanel
  : ({
      track: (eventName, properties, optionsOrCallback) => {
        const options =
          typeof optionsOrCallback === 'function' ? null : optionsOrCallback;

        // eslint-disable-next-line
        console.log('track:', eventName, properties, options || '');
      },
    } as Pick<OverridedMixpanel, 'track'>);
