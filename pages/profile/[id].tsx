import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Link href='/room'>
        <BackButton title='Back' href='/'></BackButton>
      </Link>
      <div className='test'>
        <Avatar src='' width='100px' height='100px' />
        <h2>Profile name</h2>
        <h3>@skostenko</h3>
        <Button>follow</Button>
      </div>
      <div>info</div>
    </div>
  );
}
