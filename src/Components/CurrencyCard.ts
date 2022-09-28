import Color from 'color';
import {CONFIG, styled} from '@app/styling';

const BORDER = Color(CONFIG.theme.colors.primary).alpha(0.55);
const SHADOW = Color(CONFIG.theme.colors.primary).alpha(0.25);

const CurrencyCard = styled('div', {
  background: '$base',
  border: '1px solid transparent',
  borderRadius: '$regular',
  marginBottom: '$4',
  padding: '$4',
  transition: 'box-shadow 300ms, margin 300ms',
  
  '&:hover': {
    boxShadow: '0px 8px 12px -8px $colors$gray400',
  },

  variants: {
    active: {
      true: {
        border: `1px solid ${BORDER}`,
        boxShadow: `0px 8px 12px -8px ${SHADOW}`,
      }
    }
  },
});

export default CurrencyCard;