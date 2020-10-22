import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Hero } from 'components/hero';
import { Content } from 'lib/contents';
import { MetaLink } from 'components/meta-link';
import { Section } from 'components/section';

import styles from './contents.module.scss';

interface SingleContent extends Content {
  useHero?: boolean;
}

const Header: React.FunctionComponent<{ title: string; date?: string; useHero?: boolean }> = ({
  title,
  date = '',
  useHero = false,
}) => {
  if (useHero) {
    return (
      <Hero>
        <h1>{title}</h1>
        {date && <p className={styles.SingleMeta}>{date}</p>}
      </Hero>
    );
  }
  return <h1 className={styles.SingleHeader__title}>{title}</h1>;
};

export const SingleContent: React.FunctionComponent<SingleContent> = ({
  title,
  body,
  date = '',
  metaLink = '',
  type = 'text',
  useHero = false,
}) => {
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  if (date) {
    date = new Intl.DateTimeFormat('en-GB', dateOptions).format(new Date(date));
  }

  return (
    <>
      <header className={styles.SingleHeader}>
        <Header title={title} date={date} useHero={useHero} />
      </header>
      {type === 'video' && metaLink && (
        <Section make="wide">
          <MetaLink url={metaLink} />
        </Section>
      )}
      <Section make="readable">
        <ReactMarkdown source={body} />
      </Section>
      {type === 'link' && metaLink && (
        <Section make="narrow">
          <MetaLink url={metaLink} />
        </Section>
      )}
    </>
  );
};
