// addVariablesForColorsPlugin.ts
import { flattenColors } from './flattenColors';

interface PluginUtilities {
  addBase: (styles: Record<string, any>) => void;
  theme: (path: string) => Record<string, any>;
}

/**
 * Tailwind CSS plugin to add CSS variables for color palette.
 * @param utilities Plugin utilities provided by Tailwind.
 */
export function addVariablesForColors({ addBase, theme }: PluginUtilities) {
  let allColors = flattenColors(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({ ":root": newVars });
}
