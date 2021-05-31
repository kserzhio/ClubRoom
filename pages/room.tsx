import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import Link from 'next/link';
import Axios from '../core/axios';
export default function Room({ rooms = [] }) {
  return (
    <>
      <Header></Header>
      <div className='container'>
        <div className='flex  flex-between align-items-center'>
          <h1>All Conversations</h1>
          <Button color='green' icons={faPlus}>
            Start room
          </Button>
        </div>
        <div className='mr-t-10 flex flex-wrap flex-start'>
          {rooms.map((obj, index) => {
            return (
              <Link key={index} href={`/room/${obj.id}`}>
                <a>
                  <Card
                    title={obj.title}
                    avatars={obj.avatars}
                    users={obj.guests}
                    questsCount={obj.guestsCount}
                    speakersCount={obj.speakersCount}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get('/rooms.json');
    return {
      props: {
        rooms: data,
      },
    };
  } catch (error) {
    return {
      props: []
    };
  }
};
