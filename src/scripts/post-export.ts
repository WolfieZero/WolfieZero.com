import { writeFile } from 'fs';
import { feed } from 'lib/json-feed';

const createFeed = (filename: string, func: () => string) =>
  writeFile(`./out/${filename}`, func(), error => {
    error ? console.error(error) : console.info(`${filename} created`);
  });

createFeed('rss.xml', feed.rss2);
createFeed('atom.xml', feed.atom1);
createFeed('feed.xml', feed.json1);
