import {styled} from '@app/styling';

const Content = styled('div', {
  width: 'max(700px, 60%)',
  margin: '0 auto',
  
  '@media screen and (max-width: 700px)': {
    width: '100%',
    padding: '0 $4',
  },
});

export default Content;