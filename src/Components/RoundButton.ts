import Color from 'color';
import {CONFIG, styled} from '@app/styling';

const DEFAULT_SHADOW = Color(CONFIG.theme.colors.gray).alpha(0.75);
const ACTIVE_SHADOW = Color(CONFIG.theme.colors.primary).alpha(0.2);
const ACTIVE_BORDER = Color(CONFIG.theme.colors.primary).alpha(0.55);

const RoundButton = styled('button', {
  background: 'transparent',
  border: '1px solid $gray200',
  borderRadius: '$small',
  boxShadow: `0 0 4px 4px ${DEFAULT_SHADOW}`,
  display: 'block',
  outline: 'none',
  margin: 0,
  padding: '$1',
  transition: 'all 300ms',
  
  '&:focus': {
    outline: 'blue',
    borderColor: '$gray100',
  },
  
  variants: {
    active: {
      true: {
        // background: '$base',
        background: '$primary',
        borderColor: ACTIVE_BORDER.toString(),
        boxShadow: `0 0 4px 4px ${ACTIVE_SHADOW}`,
      },
    },
  },
});

export default RoundButton;
