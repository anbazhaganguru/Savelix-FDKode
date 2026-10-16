/**
 * SAVELIX Design Tokens
 * Source: Approved Colour Palette & UI Design System (Pages 2-6)
 */
export const SAVELIX_TOKENS = Object.freeze({
  colors: Object.freeze({
    paleLilac: '#F7F3FA',
    softLavender: '#EDE5F4',
    lavenderLight: '#F2ECF7',
    mutedPurple: '#8065A8',
    mutedPurpleHover: '#6C528F',
    deepPlum: '#302B50',
    deepPlumHover: '#25203F',
    softGrey: '#666477',
    border: '#E4DCEB',
    white: '#FFFFFF',
    imageOverlay: 'rgba(237, 229, 244, 0.25)',
  }),
  typography: Object.freeze({
    fontFamily: '"Plus Jakarta Sans"',
    fontFamilySerif: '"Baskervville", Georgia, serif',
  }),
  radii: Object.freeze({
    card: '12px',
    hero: '42px',
    button: '999px',
  }),
  spacing: Object.freeze({
    desktopSection: '96px',
    mobileSection: '56px',
  }),
  shadows: Object.freeze({
    sm: '0 1px 3px 0 rgba(48, 43, 80, 0.04), 0 1px 2px 0 rgba(48, 43, 80, 0.02)',
    md: '0 4px 6px -1px rgba(48, 43, 80, 0.06), 0 2px 4px -1px rgba(48, 43, 80, 0.03)',
    lg: '0 10px 15px -3px rgba(48, 43, 80, 0.08), 0 4px 6px -2px rgba(48, 43, 80, 0.04)',
  }),
});

export default SAVELIX_TOKENS;
