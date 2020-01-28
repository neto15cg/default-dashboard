import React from 'react';
//@ts-ignore
import IosArrowRoundBack from 'react-ionicons/lib/IosArrowRoundBack';
import './style.css';

export interface Props {
  darkmode: boolean;
  title: string;
  onClick: () => void;
}
export default function Button(props: Props) {
  const {darkmode, title, onClick} = props;
  return (
    <>
      <button
        onClick={() => onClick()}
        className="button"
        style={{
          backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
          color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
        }}>
        <IosArrowRoundBack
          fontSize="20px"
          color={darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}
          style={{
            marginRight: 5,
          }}
        />
        {title}
      </button>
    </>
  );
}
