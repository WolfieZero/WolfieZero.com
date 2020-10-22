import { Feed } from 'feed';

import { getContents, ContentName } from 'lib/contents';
import { siteMeta, feedLength } from 'config.json';

const posts = getContents(ContentName.blog, feedLength);

export const feed = new Feed({
  title: siteMeta.title,
  id: siteMeta.siteUrl,
  description: siteMeta.description,
  language: 'en-GB',
  copyright: `Copyright ${siteMeta.author}`,
  feedLinks: {
    json: `${siteMeta.siteUrl}/feed.json`,
  },
  favicon: `${siteMeta.siteUrl}/static/favicon.ico`,
  author: {
    name: siteMeta.author,
    email: siteMeta.email,
    link: siteMeta.siteUrl,
  },
});

posts.map(post => {
  const postUrl = `${siteMeta.siteUrl}/${post.path}`;
  feed.addItem({
    id: postUrl,
    link: postUrl,
    title: post.title,
    content: `${post.excerpt} - ${postUrl}`,
    // summary: post.excerpt,
    // image: `${siteMeta.siteUrl}${post.image}`,
    date: new Date(post.date),
    author: [
      {
        name: siteMeta.author,
      },
    ],
  });
});
