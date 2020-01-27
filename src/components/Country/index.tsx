import React from 'react';
import './style.css';

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
        backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
      }}>
      <img src={flag} alt="country" style={{width: '100%', height: '60%'}} />
      <div className="country-information">
        <strong
          className="contry-title"
          style={{
            color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
          }}>
          {name}
        </strong>
        <label
          className="label-country"
          style={{
            color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
          }}>
          Population:&nbsp;
          <span
            className="value-country"
            style={{
              color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
            }}>
            {population}
          </span>
        </label>
        <label
          className="label-country"
          style={{
            color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
          }}>
          Region:&nbsp;
          <span
            className="value-country"
            style={{
              color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
            }}>
            {region}
          </span>
        </label>
        <label
          className="label-country"
          style={{
            color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
          }}>
          Capital:&nbsp;
          <span
            className="value-country"
            style={{
              color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
            }}>
            {capital}
          </span>
        </label>
      </div>
    </div>
  );
}
