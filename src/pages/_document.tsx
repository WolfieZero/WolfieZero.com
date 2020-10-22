import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

import config from 'config.json';

class AppDocument extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps: DocumentInitialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang={config.language}>
        <Head />
        <body>
          <style jsx global>{`
            #__next {
              height: 100%;
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
