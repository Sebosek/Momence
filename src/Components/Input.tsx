import React, {InputHTMLAttributes} from 'react';
import Color from 'color';
import {CONFIG, styled} from '@app/styling';
import Text from '@app/Components/Text';

const TRANSPARENT = Color(CONFIG.theme.colors.gray200).alpha(0.15);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  currency: string;
}

const Wrapper = styled('div', {
  alignItems: 'center',
  background: '$base',
  
  border: '1px solid $gray200',
  borderRadius: '$small',
  
  display: 'flex',
  flexDirection: 'row',
  padding: '$3',
  position: 'relative',
  transition: 'all 300ms',
  
  '&:focus-within': {
    borderColor: '$primary',
  },
  
  variants: {
    readOnly: {
      true: {
        background: TRANSPARENT.toString(),
        borderColor: '$gray200',
      }
    },
  }
});

const Control = styled('input', {
  background: 'transparent',
  border: 'none',
  flexGrow: 1,
  marginBottom: 2,
  marginRight: '$3',
  width: '100%',
  textAlign: 'right',

  '&:focus': {
    outline: 'none',
  }
});


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ currency, readOnly, ...rest }, ref) => (
  <Wrapper readOnly={readOnly}>
    <Control {...rest} readOnly={readOnly} disabled={readOnly} ref={ref} />
    {currency && <Text color={readOnly ? "muted" : "default"} css={{fontWeight: 500}}>{currency}</Text>}
  </Wrapper>
));

export default Input;