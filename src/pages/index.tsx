import React from 'react';
import { GetStaticProps } from 'next';

import { Button, ButtonGroup } from 'components/button';
import { ContentsList } from 'components/contents';
import { Hero, HeroIntro } from 'components/hero';
import { NavigationItem } from 'components/navigation';
import { Section } from 'components/section';
import { Layout } from 'components/site';
import { getContents, getNumberOfContents, Content, ContentName } from 'lib/contents';

import { navigationItems, homepageFeedLength, display, siteMeta } from 'config.json';

type HomeProps = {
  blog: Content[];
  navigationItems: NavigationItem[];
  totalBlogs: number;
};

export const Home: React.FunctionComponent<HomeProps> = ({ blog, totalBlogs, ...props }) => {
  return (
    <Layout {...props} title="" description={siteMeta.description}>
      <Hero modifiers={['moi']}>
        <HeroIntro />
      </Hero>
      <Section make="narrow">
        {display.blog && <ContentsList items={blog} />}
        {display.blog && homepageFeedLength > 0 && blog.length > 0 && totalBlogs > blog.length && (
          <ButtonGroup>
            <Button href="/blog" fill="half">
              See all
            </Button>
          </ButtonGroup>
        )}
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blog: Content[] = getContents(ContentName.blog, homepageFeedLength);
  const totalBlogs = getNumberOfContents(ContentName.blog);
  return {
    props: {
      blog,
      navigationItems,
      totalBlogs,
    },
  };
};

export default Home;
