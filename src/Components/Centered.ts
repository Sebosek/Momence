import {styled} from '@app/styling';

const Centered = styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  
  variants: {
    vertical: {
      true: {
        flexDirection: 'column',
      },
    },
  },
});

export default Centered;