import React from 'react';
import './style.css';
//@ts-ignore
import IosSearch from 'react-ionicons/lib/IosSearch';

export interface Props {
  darkmode: boolean;
  onChangeText: (text: string) => void;
}

export default function Input(props: Props) {
  const {darkmode, onChangeText} = props;
  return (
    <div
      className="container-input"
      style={{
        backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
      }}>
      <div className="container-icon-input">
        <IosSearch
          fontSize="20px"
          color={darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}
          style={{
            marginRight: 5,
          }}
        />
      </div>
      <input
        style={{
          backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
          color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
        }}
        className="input"
        placeholder="Search for a country..."
        onChange={e => onChangeText(e.target.value)}
      />
    </div>
  );
}
