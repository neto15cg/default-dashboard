import React from 'react';
import './style.css';
import Input from 'src/components/Input';
import Select from 'src/components/Select';

export interface Props {
  darkmode: boolean;
  onChangeText: (text: string) => void;
  onSelectFilter: (filter: string) => void;
}

export default function SubHeader(props: Props) {
  const {darkmode, onChangeText, onSelectFilter} = props;
  return (
    <div className="container-sub-header">
      <Input darkmode={darkmode} onChangeText={text => onChangeText(text)} />
      <Select
        darkmode={darkmode}
        opstions={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
        onClick={option => onSelectFilter(option)}
      />
    </div>
  );
}
