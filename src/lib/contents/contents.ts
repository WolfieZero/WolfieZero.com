import matter from 'gray-matter';
import { readdirSync } from 'fs';
import removeMarkdown from 'remove-markdown';
import { extname, basename, dirname, resolve } from 'path';

export interface Content {
  key: string;
  title: string;
  body: string;
  slug: string;
  path: string;
  date: string;

  description?: string;
  blurb?: string;
  excerpt?: string;
  metaLink?: string;
  type?: string;
}

/**
 * Content directory.
 */
const CONTENT_DIRECTORY: string = resolve(process.cwd(), 'content');

/**
 * Different content names allowed.
 */
export enum ContentName {
  blog = 'blog',
  page = 'page',
}

const findMarkdownFiles = (path: string): string[] => {
  try {
    const files: string[] = readdirSync(path).map(file => resolve(path, file));
    return files.filter(file => extname(file) === '.md');
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

const extractContents = (filePath: string): Content => {
  const data: matter.GrayMatterFile<matter.Input> = matter.read(filePath, {
    excerpt: true,
    excerpt_separator: '<!-- end -->',
  });

  const body = data.content.replace('\n', '');
  let excerpt = data?.excerpt?.replace('\n', '') || '';

  if (excerpt === '') {
    excerpt = body.replace(/<[^>]*>?/gm, '');
    excerpt = removeMarkdown(excerpt);
    excerpt = excerpt.split(' ').slice(0, 50).join(' ');
    excerpt += excerpt.slice(-1) === '.' ? '..' : '...';
  }

  const content: Content = {
    key: basename(filePath),
    title: data.data.title,
    body,
    excerpt,
    slug: data.data.slug,
    path: `${basename(dirname(filePath))}/${data.data.slug}`,
    blurb: data.data?.blurb || excerpt,
    date: data.data?.date?.toString() || '',
    type: data.data?.type || '',
  };

  if (data.data.metaLink) {
    content.metaLink = data.data.metaLink;
  }

  return content;
};

/**
 * Gets a list of markdown files with formatted front-matter.
 *
 * @param path Location for the list of markdown files
 */
const markdownFilesContents = (path: string): Content[] => {
  const files: string[] = findMarkdownFiles(path);
  return files.map(item => extractContents(item));
};

/**
 * Get content based on the name of content type.
 *
 * @todo Could be better using a proxy?
 * @param name Content type name
 */
export const getContents = (name: ContentName, limit = -1, startIndex = 0): Content[] => {
  const path: string = resolve(CONTENT_DIRECTORY, name);
  let data = markdownFilesContents(path);
  data.sort((a: Content, b: Content) => +new Date(b.date) - +new Date(a.date));
  if (limit >= 0) {
    const endIndex: number = startIndex + limit;
    data = data.slice(startIndex, endIndex);
  }
  return data;
};

/**
 * Returns the specific content requests based on the content name.
 *
 * @param slug Slug property of the speific content
 * @param name Content type name to get the specific content from
 */
export const getSpecificContent = (slug: string, name: ContentName): Content => {
  const contents: Content[] = getContents(name);
  const content = contents.find(item => item.slug === slug);
  if (!content) {
    throw new Error(`Cannot find content relating to slug '${slug}'`);
  }
  return content;
};

/**
 * Reutrns a list of content slugs to help generate pages.
 *
 * @param name Content type name
 */
export const getContentSlugs = (name: ContentName): string[] => {
  const contents: Content[] = getContents(name);
  let prefix = `/${name}`;
  if (name === ContentName.page) {
    prefix = '';
  }
  const contentSlugs: string[] = contents.map(item => `${prefix}/${item.slug}`);

  return contentSlugs;
};

/**
 * Reutrns the number of contents there are.
 *
 * @param name Content type name
 */
export const getNumberOfContents = (name: ContentName): number => {
  const contents = getContents(name);
  const numberOfContents = contents.length;

  return numberOfContents;
};

/**
 *
 * @todo rename to `getNumberOfContentPagination()`
 * @param name
 * @param limit
 */
export const getNumberOfContentPages = (name: ContentName, limit = 10): number => {
  const contents = getContents(name);
  const numberOfContentPages: number = Math.ceil(contents.length / limit);

  return numberOfContentPages;
};

export const getContentPageNumberSlugs = (name: ContentName, limit = 10): string[] => {
  const numberOfPages = getNumberOfContentPages(name, limit);
  const pageSlugs = [...new Array<string>(numberOfPages)];
  const contentPageNumberSlugs: string[] = pageSlugs.map((slug, index) => {
    return `/${name}/page/${index + 1}`;
  });

  return contentPageNumberSlugs;
};
