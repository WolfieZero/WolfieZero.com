/**
 * Easily build a list of class names.
 *
 * @param list List of class names to assign
 */
export const classList = (list: (undefined | string | string[])[]): string =>
  list
    .map((item: undefined | string | string[]) => {
      if (Array.isArray(item)) {
        return classList(item);
      }
      return item;
    })
    .join(' ')
    .trim();
