import React from 'react';
import { WelcomeStep } from '../components/steps/WelcomeStep';
import { EnterNameStep } from '../components/steps/EnterNameStep';
import { TwitterStep } from '../components/steps/TwitterStep';
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep';
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep';
import { EnterCodeStep } from '../components/steps/EnterCodeStep';
import { Header } from '../components/Header';
export type UserData = {
  id: number;
  fullname: string;
  avatarUrl: string;
  isActive: number;
  username: string;
  phone: string;
  token?: string;
};
type MainContextProps = {
  onNextStep: () => void;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setFieldValue: (field: keyof UserData, value: string) => void;
  step: number;
  userData?: UserData;
};
export const MainContext = React.createContext<MainContextProps>(
  {} as MainContextProps
);
export default function Home() {
  const stepsComponent = {
    0: WelcomeStep,
    1: TwitterStep,
    2: EnterNameStep,
    3: ChooseAvatarStep,
    4: EnterPhoneStep,
    5: EnterCodeStep,
  };
  const [step, setStep] = React.useState<number>(1);
  const [userData, setUserData] = React.useState<UserData>();
  const Step = stepsComponent[step];
  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const setFieldValue = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <MainContext.Provider
      value={{ step, onNextStep, userData, setUserData, setFieldValue }}
    >
      <Header></Header>
      <Step />
    </MainContext.Provider>
  );
}
