import {styled} from '@app/styling';

const Stripped = styled('span', {
  backgroundImage: 'linear-gradient(-60deg, $primary 70px, $secondary 70px, $secondary 100%)',
  backgroundClip: 'text',
  backgroundSize: '100%',
  backgroundRepeat: 'repeat',
  color: 'transparent',
  fontWeight: 600,
});

export default Stripped;