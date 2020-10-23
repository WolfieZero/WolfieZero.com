import { getContents, getNumberOfContentPages, getContentPageNumberSlugs, Content, ContentName } from '.';

import { display } from '../../config.json';

describe('lib/articles', () => {
  it('gets list of content group (blog) in folder', () => {
    const blog: Content[] = getContents(ContentName.blog, 2);
    blog.forEach(blogItem => {
      expect(blogItem.key).toContain('.md');
      expect(blogItem.slug).toEqual(expect.any(String));
    });
  });

  it('gets page numbers for a content group (blog)', () => {
    const pages: number = getNumberOfContentPages(ContentName.blog, 2);
    if (display.blog) {
      expect(pages).toBeGreaterThan(0);
    }
    // If it's off then assumed it won't work by design
  });

  it('gets page numbers slugs a content group (blog)', () => {
    const slugs: string[] = getContentPageNumberSlugs(ContentName.blog, 2);
    slugs.forEach(slug => {
      expect(slug).toContain('/blog/page/');
    });
  });

  it('gets list of pages', () => {
    const blog: Content[] = getContents(ContentName.page, 2);
    blog.forEach(blogItem => {
      expect(blogItem.key).toContain('.md');
      expect(blogItem.slug).toEqual(expect.any(String));
    });
  });
});
