import { NodePlopAPI } from 'plop';
import { resolve } from 'path';

import { prependZero } from '../../../src/helpers/prepend-zero';

export const BlogGenerator = (plop: NodePlopAPI): void => {
  const datetime = new Date();
  const destinationPath = resolve(__dirname, '../../../content/blog');
  const templatesPath = resolve(__dirname, 'templates');

  plop.addHelper('slug-date', (): string => {
    return (
      prependZero(datetime.getFullYear()) +
      prependZero(datetime.getMonth() + 1) +
      prependZero(datetime.getDate()) +
      prependZero(datetime.getHours()) +
      prependZero(datetime.getMinutes())
    );
  });

  plop.addHelper('datetime', (): string => {
    return (
      prependZero(datetime.getFullYear()) +
      '/' +
      prependZero(datetime.getMonth() + 1) +
      '/' +
      prependZero(datetime.getDate()) +
      ' ' +
      prependZero(datetime.getHours()) +
      ':' +
      prependZero(datetime.getMinutes())
    );
  });

  plop.setGenerator('blog', {
    description: 'make a new blog post',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'blog post title',
      },
      {
        type: 'rawlist',
        name: 'type',
        message: 'what type of blog post',
        choices: ['text', 'video', 'link'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${destinationPath}/{{ slug-date }}-{{ kebabCase title }}.md`,
        templateFile: `${templatesPath}/blog.md.hbs`,
      },
    ],
  });
};
