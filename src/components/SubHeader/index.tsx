import React from 'react';
import './style.css';
import Input from 'src/components/Input';
import Select from 'src/components/Select';

export interface Props {
  darkmode: boolean;
}

export default function SubHeader(props: Props) {
  const {darkmode} = props;
  return (
    <div className="container-sub-header">
      <Input darkmode={darkmode} onChangeText={text => console.log(text)} />
      <Select
        darkmode={darkmode}
        opstions={['xxxxx', 'yyyy', 'zzzz']}
        onClick={option => console.log(option)}
      />
    </div>
  );
}
