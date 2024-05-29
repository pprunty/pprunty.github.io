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
  colorBackground: '#F0F0F0',
  colorTextPrimary: 'black',
};

const updateMetaThemeColor = (color: string) => {
  const metaThemeColor = document.querySelector("meta[name=theme-color]");
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", color);
  } else {
    const metaTag = document.createElement('meta');
    metaTag.name = "theme-color";
    metaTag.content = color;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }
};

export { updateMetaThemeColor }; // Exporting the function separately
