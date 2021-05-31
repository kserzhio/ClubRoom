import React from 'react';
import { Avatar } from '../Avatar';
import styles from './header.module.scss';
export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className='container flex flex-between'>
        <div className='flex align-items-center regular'>
          <img src='https://img.icons8.com/fluent/48/000000/user-group-man-woman.png' />
          Welcome to the Club
        </div>
        <div className='flex align-items-center'>
          <span className='regular'>Skostenko</span>
          <Avatar
            src='https://img.icons8.com/fluent/48/000000/poker-face.png'
            width='48px'
            height='48px'
          ></Avatar>
        </div>
      </div>
    </div>
  );
};
