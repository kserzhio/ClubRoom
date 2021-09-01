import React from 'react';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { Avatar } from '../../Avatar';
import { MainContext } from '../../../pages';
import { Axios } from '../../../core/axios';
import { StepInfo } from '../../StepInfo';

const uploadFile = async (file: File): Promise<{ url: string }> => {
  const formData = new FormData();
  formData.append('photo', file);
  console.log(file);
  console.log(formData);
  const { data } = await Axios({
    method: 'POST',
    url: '/upload',
    data: formData,
  });
  return data;
};
export const ChooseAvatarStep: React.FC = () => {
  const { onNextStep, setFieldValue, userData } = React.useContext(MainContext);
  const inputRef = React.useRef<HTMLInputElement>();
  const [avatarUrl, setAvatarUrl] = React.useState(
    'https://html5css.ru/w3css/img_avatar3.png'
  );
  const handleChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    let file = target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
      const data = await uploadFile(file);
      target.value = '';
      setAvatarUrl(data.url);
      setFieldValue('avatarUrl', data.url);
    }
  };
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChange);
    }
  }, []);
  return (
    <div>
      <StepInfo title={`Okey ${userData?.fullname}`} description="How's this foto" icons="/static/img/foto.png"></StepInfo>
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
        <Button onClick={onNextStep}>Next</Button>
      </WhiteBlock>
    </div>
  );
};
