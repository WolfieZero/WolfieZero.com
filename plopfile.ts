import { NodePlopAPI } from 'plop';
import { BlogGenerator } from './plop/generators/blog/blog.generator';
import { ComponentGenerator } from './plop/generators/component/component.generator';

export default function (plop: NodePlopAPI): void {
  BlogGenerator(plop);
  ComponentGenerator(plop);
}
