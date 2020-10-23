export interface ImageProps {
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt = '', ...props }) => {
  return <img src={src} loading="lazy" alt={alt} {...props} />;
};
