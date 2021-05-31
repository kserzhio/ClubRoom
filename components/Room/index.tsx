import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';
import { Button } from '../Button';

interface RoomProps {
  title: string;
}
export const RoomPageComponent: React.FC<RoomProps> = ({ title }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <Link href='/room'>
          <a>
             <Button color='gray' icons={faArrowRight} >Leave quietly</Button>
          </a>
        </Link>
      </div>
      <div></div>
    </div>
  );
};
