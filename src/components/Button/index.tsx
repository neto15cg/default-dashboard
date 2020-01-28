import React from 'react';
//@ts-ignore
import IosArrowRoundBack from 'react-ionicons/lib/IosArrowRoundBack';
import {colorElements, colorText} from 'src/util/Colors';
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
          backgroundColor: colorElements(darkmode),
          color: colorText(darkmode),
        }}>
        <IosArrowRoundBack
          fontSize="20px"
          color={colorText(darkmode)}
          style={{
            marginRight: 5,
          }}
        />
        {title}
      </button>
    </>
  );
}
