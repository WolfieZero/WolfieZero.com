declare namespace App {
  type ClassName = string | string[];

  interface ExtendedProps {
    className?: ClassName;
    style?: React.CSSProperties;
  }
}
