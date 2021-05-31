import React from 'react';
import { Avatar } from '../Avatar';
import styles from './Card.module.scss';

interface PropsCard {
  title: string;
  users: string[];
  avatars: string[];
  questsCount: number;
  speakersCount: number;
}
export const Card: React.FC<PropsCard> = ({
  title,
  users = [],
  avatars = [],
  questsCount,
  speakersCount,
}) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.avatarContainer}>
        {avatars.map((url, i) => {
          return (
            <Avatar
              key={url}
              width='55px'
              height='55px'
              src={url}
              className={i === avatars.length - 1 ? 'lastAvatar' : 'avatarCircle'}
            />
          );
        })}
      </div>
      <div className={styles.nameContainer}>
        <ul>
          {users.map((name) => {
            return <li className={styles.itemName} key={name}>{name}</li>;
          })}
        </ul>
        <ul className='flex'>
          <li className={styles.itemName}>{questsCount}</li>
          <li className={styles.itemName}>{speakersCount}</li>
        </ul>
      </div>
    </div>
  );
};
