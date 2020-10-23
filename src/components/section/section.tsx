import style from './section.module.scss';

export interface SectionProps {
  make: 'wide' | 'narrow' | 'readable' | 'contained';
}

export const Section: React.FC<SectionProps> = ({ children, make = 'contained' }) => {
  const classNames: string[] = [style.Section];

  switch (make) {
    case 'contained':
      // classNames.push(style.Section_make_contained);
      break;
    case 'narrow':
      classNames.push(style.Section_make_narrow);
      break;
    case 'wide':
      classNames.push(style.Section_make_wide);
      break;
    case 'readable':
      classNames.push(style.Section_make_readable);
      break;
    default:
      throw new Error(`Unknown section type: ${make}`);
    // no default
  }

  const className = classNames.join(' ');
  return <section className={className}>{children}</section>;
};
