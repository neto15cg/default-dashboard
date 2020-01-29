import React from 'react';
import './style.css';
import {colorElements, colorText} from 'src/util/Colors';

export interface Props {
  darkmode: boolean;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  onClick: () => void;
}

export default function(props: Props) {
  const {darkmode, name, population, region, capital, flag, onClick} = props;
  return (
    <div
      onClick={() => onClick()}
      className="container-country"
      style={{
        backgroundColor: colorElements(darkmode),
      }}>
      <img className="image-home" src={flag} alt={name} />
      <div className="country-information">
        <strong
          className="contry-title"
          style={{
            color: colorText(darkmode),
          }}>
          {name}
        </strong>

        <Label darkmode={darkmode} label={'Population'} content={population} />
        <Label darkmode={darkmode} label={'Region'} content={region} />
        <Label darkmode={darkmode} label={'Capital'} content={capital} />
      </div>
    </div>
  );
}

export interface LabelProps {
  darkmode: boolean;
  label: string;
  content: string | number;
}

const Label = (props: LabelProps) => {
  const {darkmode, label, content} = props;
  return (
    <label
      className="label-country"
      style={{
        color: colorText(darkmode),
      }}>
      {label}:&nbsp;
      <span
        className="value-country"
        style={{
          color: colorText(darkmode),
        }}>
        {content}
      </span>
    </label>
  );
};
