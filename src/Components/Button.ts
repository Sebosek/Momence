import {styled} from '@app/styling';

const Button = styled('button', {
  background: '$primary',
  border: '1px solid $primary',
  borderRadius: '$small',
  boxShadow: '0px 8px 12px -8px $primary',
  color: '$base',
  cursor: 'pointer',
  display: 'inline-flex',
  height: 'auto',
  justifyContent: 'center',
  maxWidth: 220,
  minWidth: 120,
  padding: '$3 $4',
  textAlign: 'center',
});

export default Button;