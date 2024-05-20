export interface Theme {
  colorBackground: string;
  colorTextPrimary: string;
}

const commonTheme = {
  borderRadius: '0.25rem',
  inputBorderRadius: '0.25rem',
  modalBorderRadius: '0rem',
  fontSizeTiny: '0.65rem',
  fontSizeSmall: '0.75rem',
  fontSizeMedium: '0.875rem',
  fontSizeLarge: '1rem',
  fontSizeHeader2: '1.425rem',
  fontSizeHeader3: '1.425rem',
  primaryButtonHeight: '2.25rem',
  primaryButtonHeightMobile: '2.5rem',
  formInputHeight: '2.25rem',
  formInputHeightMobile: '2.5rem',
};

export const lightTheme: Theme = {
  ...commonTheme,
  colorBackground: '#fff',
  colorTextPrimary: 'black',
};
