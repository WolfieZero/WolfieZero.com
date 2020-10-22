import { regexYoutube } from './regex';

export enum LinkName {
  Youtube = 'youtube',
  Link = 'link',
}

/**
 * Retuns the links service name as LinkName.
 *
 * @param link URL to find the LinlName for
 */
export const getLinkName = (link: string): LinkName => {
  if (regexYoutube.test(link)) {
    return LinkName.Youtube;
  }

  return LinkName.Link;
};
