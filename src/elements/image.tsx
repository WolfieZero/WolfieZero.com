type ImageProps = {
  src: string;
  alt: string;
};

export const Image: React.FunctionComponent<ImageProps> = ({ src, alt = '', ...props }) => {
  return <img src={src} loading="lazy" alt={alt} {...props} />;
};
