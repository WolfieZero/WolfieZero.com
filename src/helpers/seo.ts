export const seoTitle = (title = ''): string => {
  const consistantTitle = 'Neil Sweeney';
  const defaultTitle = `${consistantTitle} - Software Engineer`;
  const seperator = ' // ';

  if (title !== '') {
    return title + seperator + consistantTitle;
  }

  return defaultTitle;
};
