import {createStitches} from '@stitches/react';

export const CONFIG = {
  theme: {
    colors: {
      gray100: '#f3f6f9',
      gray200: '#E4EBF1',
      gray300: '#D7E1EA',
      gray400: '#CAD7E3',
      gray500: '#BCCDDC',
      gray600: '#AFC3D5',
      gray700: '#A1B9CE',

      gray: '#f3f6f9',
      base: '#ffffff',
      default: '#070A0E',
      primary: '#cdb4db',
      secondary: '#bde0fe',
    },
    fontSizes: {
      'small': '0.875rem',
      'regular': '1rem',
      'mega': '4rem',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
    },
    radii: {
      small: '8px',
      regular: '12px',
    },
  },
};

export const { styled, css } = createStitches(CONFIG);
