import Color from 'color';
import {CONFIG, styled} from '@app/styling';

const TRANSPARENT = Color(CONFIG.theme.colors.gray200).alpha(0.15);

const Select = styled('select', {
  alignItems: 'center',
  background: '$base',
  border: '1px solid $gray200',
  borderRadius: '$small',
  display: 'inline-flex',
  flexDirection: 'row',
  padding: '$3',
  position: 'relative',
  transition: 'all 300ms',

  '&:focus': {
    borderColor: '$primary',
  },

  variants: {
    readOnly: {
      true: {
        background: TRANSPARENT.toString(),
        borderColor: '$gray200',
      }
    },
  },
});

export default Select;