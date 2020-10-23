import React from 'react';

import { ButtonGroup, Button } from 'components/button';
import { Video } from 'components/video';
import { getLinkName, LinkName } from 'lib/links';

export interface MetaLinkProps {
  url: string;
}

export const MetaLink: React.FC<MetaLinkProps> = ({ url }) => {
  switch (getLinkName(url)) {
    case LinkName.Youtube:
      return <Video url={url} />;
    default:
      return (
        <ButtonGroup>
          <Button href="url">Go to: {url}</Button>
        </ButtonGroup>
      );
  }
};
