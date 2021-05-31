import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.scss';

const colors = {
  green: styles.buttonGreen,
  gray: styles.buttonGray,
};
interface ButtonProps {
  disabled?: boolean;
  color?: keyof typeof colors;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: string;
  icons?: any;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color,
  onClick,
  className,
  icons,
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}
    >
      <span className="pd-r-10">{children}</span>
      <FontAwesomeIcon icon={icons ? icons : ''}></FontAwesomeIcon>
    </button>
  );
};
