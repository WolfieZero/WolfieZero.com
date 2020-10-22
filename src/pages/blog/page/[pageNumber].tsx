import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Button, ButtonGroup } from 'components/button';
import { ContentsList } from 'components/contents';
import { NavigationItem } from 'components/navigation';
import { PageHeader } from 'components/page-header';
import { Section } from 'components/section';
import { Layout } from 'components/site';
import { Container } from 'elements/container';
import { getContents, getNumberOfContentPages, getContentPageNumberSlugs, ContentName, Content } from 'lib/contents';

import { navigationItems, contentPerPage } from 'config.json';

type BlogPostProps = {
  content: Content[];
  currentPageNumber: number;
  navigationItems: NavigationItem[];
  numberOfContentPages: number;
};

const PageNumber: React.FunctionComponent<BlogPostProps> = ({
  content,
  currentPageNumber,
  numberOfContentPages,
  ...props
}) => {
  const nextPageNumber = currentPageNumber + 1;
  const previousPageNumber = currentPageNumber - 1;
  console.log({ previousPageNumber });
  return (
    <Layout {...props}>
      <PageHeader>
        <Container>
          <h1>Archive of Blog Posts</h1>
        </Container>
      </PageHeader>
      <Section make="narrow">
        <ContentsList items={content} />
        <ButtonGroup>
          {previousPageNumber === 1 && (
            <Button href={`/blog`} fill="some">
              Previous Page
            </Button>
          )}
          {previousPageNumber > 1 && (
            <Button href={`/blog/page/${previousPageNumber}`} fill="some">
              Previous Page
            </Button>
          )}
          {nextPageNumber <= numberOfContentPages && (
            <Button href={`/blog/page/${nextPageNumber}`} fill="some">
              Next Page
            </Button>
          )}
        </ButtonGroup>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const contentGroup = ContentName.blog;
  const numberOfContentPages: number = getNumberOfContentPages(contentGroup, contentPerPage);
  const currentPageNumber: number = parseInt((params?.pageNumber || '').toString(), 10);
  const startIndex: number = (currentPageNumber - 1) * contentPerPage;
  const content = getContents(contentGroup, contentPerPage, startIndex);

  return {
    props: {
      content,
      currentPageNumber,
      navigationItems,
      numberOfContentPages,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = getContentPageNumberSlugs(ContentName.blog, contentPerPage);
  return {
    paths,
    fallback: false,
  };
};

export default PageNumber;
