// flattenColors.ts

/**
 * Recursively flattens a nested color object into a flat object with hyphenated keys.
 * @param colors A nested color object.
 * @returns A flat object with hyphenated keys representing the color palette.
 */
export function flattenColors(colors: Record<string, any>): Record<string, string> {
    const result: Record<string, string> = {};
    Object.keys(colors).forEach(key => {
      if (typeof colors[key] === 'object' && colors[key] !== null) {
        const nestedColors = flattenColors(colors[key]);
        Object.keys(nestedColors).forEach(nestedKey => {
          result[`${key}-${nestedKey}`] = nestedColors[nestedKey];
        });
      } else {
        result[key] = colors[key];
      }
    });
    return result;
  }
  