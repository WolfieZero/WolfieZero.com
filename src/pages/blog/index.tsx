import React from 'react';
import { GetStaticProps } from 'next';

import { Button, ButtonGroup } from 'components/button';
import { ContentsList } from 'components/contents';
// import { Hero, HeroIntro } from 'components/hero';
import { NavigationItem } from 'components/navigation';
import { PageHeader } from 'components/page-header';
import { Section } from 'components/section';
import { Layout } from 'components/site';
import { Container } from 'elements/container';
import { getContents, Content, ContentName } from 'lib/contents';

import { navigationItems, contentPerPage } from 'config.json';

interface IPropsBlog {
  blog: Content[];
  navigationItems: NavigationItem[];
}

const Blog = ({ blog, ...props }: IPropsBlog): JSX.Element => {
  return (
    <Layout {...props}>
      <PageHeader>
        <Container>
          <h1>Archive of Blog Posts</h1>
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
