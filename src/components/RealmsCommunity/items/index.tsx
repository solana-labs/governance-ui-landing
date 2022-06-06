import ALLOCATE_TREASURY from './allocateTreasury';
import ANALYTICS from './analytics';
import COORDINATE_MEMBERS from './coordinateMembers';
import ENGAGE_PROPOSALS from './engageProposals';
import GOV_STRUCTURE from './govStructure';
import NOTIFY_MEMBERS from './notifyMembers';
import { Props } from '../Section';

const ITEMS: Props[] = [
  GOV_STRUCTURE,
  COORDINATE_MEMBERS,
  ENGAGE_PROPOSALS,
  ALLOCATE_TREASURY,
  NOTIFY_MEMBERS,
  ANALYTICS,
].map((item, index) => ({
  ...item,
  index: index + 1,
  alignment: index % 2 === 0 ? 'right' : 'left',
}));

export default ITEMS;
