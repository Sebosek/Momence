import {styled} from '@app/styling';

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'inherit',

  variants: {
    column: {
      true: {
        flexDirection: 'column',
      },
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      stretch: {
        justifyContent: 'stretch',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
    },
    align: {
      start: {
        alignItems: 'start',
      },
      end: {
        alignItems: 'end',
      },
      center: {
        alignItems: 'center',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
  },
});

export default Flex;