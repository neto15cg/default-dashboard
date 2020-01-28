import React from 'react';
import './style.css';
//@ts-ignore
import IosSearch from 'react-ionicons/lib/IosSearch';
import {colorElements, colorText, colorInput} from 'src/util/Colors';

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
        backgroundColor: colorElements(darkmode),
      }}>
      <div className="container-icon-input">
        <IosSearch
          fontSize="20px"
          color={colorText(darkmode)}
          style={{
            marginRight: 5,
          }}
        />
      </div>
      <input
        style={{
          backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
          color: colorInput(darkmode),
        }}
        className="input"
        placeholder="Search for a country..."
        onChange={e => onChangeText(e.target.value)}
      />
    </div>
  );
}
