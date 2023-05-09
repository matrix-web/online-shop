import { CSSProperties, FC, createElement } from 'react';
import styles from './Title.module.scss';
import { Weight, Child } from '@/helpers/interfaces';

interface ITitle {
  children: Child | Child[];
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: Weight;
  className?: string;
  style?: CSSProperties;
  isUpperCase?: boolean;
}

const TitleWithTag = (props: ITitle) =>
  createElement(props.tag, { ...props, tag: null }, props.children);

export const Title: FC<ITitle> = (props): JSX.Element => {
  return (
    <TitleWithTag
      {...props}
      className={`${styles.title} ${styles[props.tag]} ${
        props.isUpperCase && styles['is-uppercase']
      }`}
    />
  );
};
