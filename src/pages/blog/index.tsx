import React from 'react';
import { GetStaticProps } from 'next';

import { Button, ButtonGroup } from 'components/button';
import { ContentsList } from 'components/contents';
import { NavigationItem } from 'components/navigation';
import { PageHeader } from 'components/page-header';
import { Section } from 'components/section';
import { Layout } from 'components/site';
import { Container } from 'elements/container';
import { getContents, Content, ContentName } from 'lib/contents';

import { navigationItems, contentPerPage } from 'config.json';

export interface BlogProps {
  blog: Content[];
  navigationItems: NavigationItem[];
}

const Blog: React.FC<BlogProps> = ({ blog, ...props }) => {
  return (
    <Layout {...props} title="Blog" description="Archive of blog posts">
      <PageHeader>
        <Container>
          <h1>Blog</h1>
        </Container>
      </PageHeader>
      <Section make="narrow">
        <ContentsList items={blog} />
        <ButtonGroup>
          <Button href="/blog/page/2" fill="some">
            Next Page
          </Button>
        </ButtonGroup>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blog: Content[] = getContents(ContentName.blog, contentPerPage);
  return {
    props: {
      navigationItems,
      blog,
    },
  };
};

export default Blog;
