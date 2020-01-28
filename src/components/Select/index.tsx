import React from 'react';
import './style.css';
//@ts-ignore
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import {colorElements, colorText} from 'src/util/Colors';

export interface Props {
  darkmode: boolean;
  opstions: string[];
  onClick: (option: string) => void;
}

export default function Input(props: Props) {
  const {darkmode, opstions, onClick} = props;
  return (
    <div className="dropdown">
      <div
        className="dropdown-container-title"
        style={{
          backgroundColor: colorElements(darkmode),
        }}>
        <span style={{color: colorText(darkmode)}}>Filter by Region</span>
        <IosArrowDown
          fontSize="14px"
          color={colorText(darkmode)}
          style={{marginTop: 3, marginLeft: 5}}
        />
      </div>
      <div
        className="dropdown-content"
        style={{
          backgroundColor: colorElements(darkmode),
        }}>
        {opstions.map(option => {
          return (
            <p
              key={option}
              className="dropdown-options"
              onClick={() => onClick(option)}
              style={{
                color: colorText(darkmode),
              }}>
              {option}
            </p>
          );
        })}
      </div>
    </div>
  );
}
