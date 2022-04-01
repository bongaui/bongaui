/**
 * Create the mode and color classes for the component based on the classes passed in
 */
export const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0
    ? {
        'bonga-color': true,
        [`bonga-color-${color}`]: true,
        ...cssClassMap,
      }
    : cssClassMap;
};
