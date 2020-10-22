import { NodePlopAPI } from 'plop';
import { resolve } from 'path';

export const ComponentGenerator = (plop: NodePlopAPI): void => {
  const destinationPath = resolve(__dirname, '../../../src/components/{{ kebabCase componentName }}');
  const templatesPath = resolve(__dirname, 'templates');

  plop.setGenerator('component', {
    description: 'make a new react component',
    prompts: [
      {
        default: 'FooBar',
        message: 'Component name',
        name: 'componentName',
        type: 'input',
      },
    ],
    actions: [
      {
        path: `${destinationPath}/index.ts`,
        templateFile: `${templatesPath}/index.ts.hbs`,
        type: 'add',
      },
      {
        path: `${destinationPath}/{{ kebabCase componentName }}.tsx`,
        templateFile: `${templatesPath}/component.tsx.hbs`,
        type: 'add',
      },
      {
        path: `${destinationPath}/{{ kebabCase componentName }}.module.scss`,
        templateFile: `${templatesPath}/component.module.scss.hbs`,
        type: 'add',
      },
    ],
  });
};
