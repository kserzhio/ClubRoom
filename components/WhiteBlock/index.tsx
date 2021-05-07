import clsx from 'clsx';
import styles from './WhiteBlock.module.scss';
interface BlockProps {
  children?: JSX.Element[] | JSX.Element;
  className?: string;
}
export const WhiteBlock: React.FC<BlockProps> = ({ children, className }) => {
  return <div className={clsx(styles.block, className)}>{children}</div>;
};
