import {styled} from '@app/styling';
import Flex from '@app/Components/Flex';

const Grid = styled(Flex, {
  gap: '$5',

  '& > *': {
    width: '50%',
  },

  '@media screen and (max-width: 700px)': {
    flexDirection: 'column',

    '& > *': {
      width: '100%',
    },
  },
});

export default Grid;