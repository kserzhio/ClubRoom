import Link from 'next/link';
import Axios from '../../core/axios';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import { RoomPageComponent } from '../../components/Room';
export default function RoomPage({ room }) {
  return (
    <>
      <Header />
      <div className='container'>
        <Link href='/room'>
          <BackButton title='All Rooms' href='/room'></BackButton>
        </Link>
        <div>
          <RoomPageComponent title={room.title} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const { data } = await Axios.get('/rooms.json');
    const room = data.find((obj) => obj.id === ctx.query.id);
    return {
      props: {
        room: room,
      },
    };
  } catch (error) {
    return {
      props: [],
    };
  }
};
