import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import config from 'config.json';

import { getContentSlugs, getSpecificContent, ContentName, Content } from 'lib/contents';
import { NavigationItem } from 'components/navigation';
import { SingleContent } from 'components/contents';
import { Layout } from 'components/site';

type BlogPostProps = {
  content: Content;
  navigationItems: NavigationItem[];
};

const BlogPost: React.FC<BlogPostProps> = ({ content, ...props }) => {
  return (
    <Layout {...props} title={content.title} description={content.description}>
      <SingleContent {...content} useHero={true} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug: string = (params?.slug || '').toString();
  const { navigationItems } = config;
  const content = getSpecificContent(slug, ContentName.blog);

  return {
    props: {
      title: content.title,
      navigationItems,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getContentSlugs(ContentName.blog);
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
