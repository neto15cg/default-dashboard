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
        <label
          className="label-country"
          style={{
            color: colorText(darkmode),
          }}>
          Population:&nbsp;
          <span
            className="value-country"
            style={{
              color: colorText(darkmode),
            }}>
            {population}
          </span>
        </label>
        <label
          className="label-country"
          style={{
            color: colorText(darkmode),
          }}>
          Region:&nbsp;
          <span
            className="value-country"
            style={{
              color: colorText(darkmode),
            }}>
            {region}
          </span>
        </label>
        <label
          className="label-country"
          style={{
            color: colorText(darkmode),
          }}>
          Capital:&nbsp;
          <span
            className="value-country"
            style={{
              color: colorText(darkmode),
            }}>
            {capital}
          </span>
        </label>
      </div>
    </div>
  );
}
