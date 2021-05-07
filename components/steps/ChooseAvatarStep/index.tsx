import React from 'react';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { Avatar } from '../../Avatar';
export const ChooseAvatarStep: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>();
  const [avatarUrl, setAvatarUrl] = React.useState(
    'https://html5css.ru/w3css/img_avatar3.png'
  );
  const handleChange = (event: Event) => {
    const file = (event.target as HTMLInputElement)[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChange);
    }
  });
  return (
    <div>
      <WhiteBlock>
        <div>
          <Avatar width='120px' height='120px' src={avatarUrl}></Avatar>
        </div>
        <div>
          <label htmlFor='image'>Choose a different avatar</label>
          <input
            id='image'
            placeholder='Enter Name'
            ref={inputRef}
            type='file'
            hidden
          />
        </div>
        <Button>Next</Button>
      </WhiteBlock>
    </div>
  );
};
