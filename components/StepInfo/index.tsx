import React from 'react';
interface StepInfoProps {
  title: string;
  description?: string;
  icons: string;
}
export const StepInfo: React.FC<StepInfoProps> = ({
  title,
  description,
  icons,
}) => {
  return (
    <div className="flex flex-wrap flex-column align-items-center mr-t-100">
      <div>
        <img src={icons} />
      </div>
      <b>{title}</b>
      {description && <p>{description}</p>}
    </div>
  );
};
