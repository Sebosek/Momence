import {styled} from '@app/styling';

const Text = styled('span', {
  color: '$default',
  
  variants: {
    variant: {
      caption: {
        fontSize: '$small',
      },
      mega: {
        fontSize: '$mega',
      },
    },
    color: {
      default: {
        color: '$default',
      },
      muted: {
        color: '$gray700',
      },
    },
    weight: {
      normal: {
        fontWeight: 400,
      },
      bold: {
        fontWeight: 500,
      },
    }
  },
});

export default Text;