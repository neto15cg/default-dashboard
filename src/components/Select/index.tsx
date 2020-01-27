import React from 'react';
import './style.css';
//@ts-ignore
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';

export interface Props {
  darkmode?: boolean;
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
          backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        }}>
        <span
          style={{color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}}>
          Filter by Region
        </span>
        <IosArrowDown
          fontSize="14px"
          color={darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}
          style={{marginTop: 3, marginLeft: 5}}
        />
      </div>
      <div
        className="dropdown-content"
        style={{
          backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        }}>
        {opstions.map(option => {
          return (
            <p
              key={option}
              className="dropdown-options"
              onClick={() => onClick(option)}
              style={{
                color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
              }}>
              {option}
            </p>
          );
        })}
      </div>
    </div>
  );
}
