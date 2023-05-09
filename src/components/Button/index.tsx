import { CSSProperties, FC, MouseEvent } from 'react';
import { Child } from '@/helpers/interfaces';
import styles from './Button.module.scss';

interface IButton {
  children: Child | Child[];
  type?: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButton> = (props): JSX.Element => {
  const {
    children,
    type = 'button',
    isDisabled,
    className,
    style,
    size = 'medium',
    variant = 'primary',
    onClick,
  } = props;

  return (
    <button
      className={`${styles.button} ${className} ${size} ${variant}`}
      onClick={(event: MouseEvent<HTMLButtonElement>) =>
        onClick && onClick(event)
      }
      style={style}
      type={type}
      disabled={isDisabled}>
      {children}
    </button>
  );
};
