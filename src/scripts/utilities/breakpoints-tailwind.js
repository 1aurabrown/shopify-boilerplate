// Import CSS breakpoints from tailwind into your JS

import tailwindConfig from './tailwind-config';
import Breakpoints from "@pluginjs/breakpoints"

// Simple object

const screens = Object.entries(tailwindConfig.theme.screens).reduce((acc, [k, v]) => {
  if (typeof(v) == "string" && v.match('px')) { acc[k] = parseInt(v.replace('px', '')) }
  return acc
}, {})

// Responsive event handling
Breakpoints({
  'xs': {
      min: 0,
      max: screens.sm - 1
  },
  'sm': {
      min: screens.sm,
      max: screens.md - 1
  },
  'md': {
      min: screens.md,
      max: screens.lg - 1
  },
  'lg': {
      min: screens.lg,
      max: screens.xl - 1
  },
  'xl': {
      min: screens.xl,
      max: Infinity
  },
})

export default Breakpoints;
export const tailwindScreens = screens;