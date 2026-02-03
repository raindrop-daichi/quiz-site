/**
 * Application constants
 */

/**
 * Responsive breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  MOBILE: 600,
  TABLET: 900,
} as const;

/**
 * Minimum tap target sizes (in pixels)
 * Based on WCAG 2.5.5 Level AAA guidelines
 */
export const TAP_TARGET_SIZES = {
  MINIMUM: 44,  // WCAG 2.5.5 AAA minimum
  MOBILE: 64,   // Enhanced for better mobile UX
  DESKTOP: 56,  // Comfortable desktop size
} as const;

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;
