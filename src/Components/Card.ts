import {styled} from '@app/styling';

const Card = styled('div', {
  background: '$base',
  borderRadius: '$regular',
  marginBottom: '$4',
  padding: '$4',
  transition: 'box-shadow 300ms, margin 300ms',

  '&:hover': {
    boxShadow: '0px 8px 12px -8px $colors$gray200',
  },

  variants: {
    active: {
      true: {
        marginTop: '$5',
        marginBottom: '$5',
      }
    }
  },
});

export default Card;