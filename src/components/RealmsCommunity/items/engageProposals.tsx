import { Props } from '../Section';

export const ENGAGE_PROPOSALS: Omit<
  Props,
  'alignment' | 'className' | 'index'
> = {
  image: '/backgrounds/engage-proposals.png',
  text: 'Create proposals and use NFTs, tokens, or veTokens alongside delegation to customize voting for your DAO.',
  title: 'Engage with proposals',
};
