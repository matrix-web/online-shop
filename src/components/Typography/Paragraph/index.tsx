import { CSSProperties, FC } from 'react';
import styles from './Paragraph.module.scss';
import { Child } from '@/helpers/interfaces';

interface IParagraph {
  children: Child;
  weight?: 400 | 500 | 600 | 700;
  size?: number;
  className?: string;
  style?: CSSProperties;
  isUppercase?: boolean;
}

export const Paragraph: FC<IParagraph> = (props): JSX.Element => {
  const {
    children,
    isUppercase = false,
    weight = 400,
    className,
    size = 16,
    style,
  } = props;

  return (
    <p
      className={`${className || ''} ${styles.paragraph} ${
        isUppercase && styles['is-uppercase']
      }`}
      style={{
        ...style,
        fontWeight: weight,
        fontSize: size,
      }}>
      {children}
    </p>
  );
};
