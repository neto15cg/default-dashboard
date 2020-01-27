import React from 'react';
import './style.css';
import Input from 'src/components/Input';

export interface Props {
  darkmode: boolean;
}

export default function SubHeader(props: Props) {
  const {darkmode} = props;
  return (
    <div className="ContainerSubHeader">
      <Input darkmode={darkmode} />
      {/* <select name="select" defaultValue="valor3">
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select> */}
    </div>
  );
}
