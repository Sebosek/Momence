import { styled } from '@app/styling';

const Header = styled('div', {
  alignItems: 'center',
  backgroundColor: '$base',
  display: 'flex',
  letterSpacing: -1,
  fontFamily: '"Ubuntu", "Segoe UI", "Roboto", "Oxygen", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: 26,
  fontWeight: 500,
  height: 80,
  width: '100%',
  // position: 'fixed',
  // top: 0,
  padding: '$5',
  marginBottom: '$5',
});

export default Header;