import React from 'react';
import './style.css';
//@ts-ignore
import IosSearch from 'react-ionicons/lib/IosSearch';

export interface Props {
  darkmode?: boolean;
}

export default function Input(props: Props) {
  const {darkmode} = props;
  return (
    <div
      className="ContainerInput"
      style={{
        backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
      }}>
      <div className="ContainerIconInput">
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
        className="Input"
        placeholder="Search for a country..."
        onChange={e => console.log(e.target.value)}
      />
    </div>
  );
}
