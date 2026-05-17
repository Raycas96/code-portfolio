export const BREAKPOINTS = {
  compact: 1024,
  mobile: 768,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

export const mediaQueries = {
  compact: `(max-width: ${BREAKPOINTS.compact}px)`,
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
} as const;
