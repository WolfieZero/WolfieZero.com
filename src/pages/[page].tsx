import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import config from 'config.json';

import { getContentSlugs, getSpecificContent, ContentName, Content } from 'lib/contents';
import { NavigationItem } from 'components/navigation';
import { SingleContent } from 'components/contents';
import { Layout } from 'components/site';

type PageProps = {
  content: Content;
  navigationItems: NavigationItem[];
};

const Page: React.FC<PageProps> = ({ content, ...props }) => {
  return (
    <Layout {...props} title={content.title} description={content.description}>
      <SingleContent {...content} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug = (params?.page || '').toString();
  const { navigationItems } = config;
  const content = getSpecificContent(slug, ContentName.page);

  return {
    props: {
      title: content.title,
      navigationItems,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getContentSlugs(ContentName.page);
  return {
    paths,
    fallback: false,
  };
};

export default Page;
