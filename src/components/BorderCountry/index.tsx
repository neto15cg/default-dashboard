import React, {useEffect, useState} from 'react';
import api from 'src/services/api';
import {colorElements, colorText} from 'src/util/Colors';
import './style.css';

export interface Props {
  darkmode: boolean;
  alpha3Code: string;
  onClick: () => void;
}
export default function CountryBorder(props: Props) {
  const [country, setCountry] = useState({} as any);

  const {darkmode, onClick} = props;

  const {alpha3Code} = props;
  useEffect(() => {
    api.get(`alpha/${alpha3Code}`).then(data => {
      setCountry(data.data);
    });
  }, [alpha3Code]);

  return (
    <>
      <button
        onClick={() => onClick()}
        className="border-country"
        style={{
          backgroundColor: colorElements(darkmode),
          color: colorText(darkmode),
        }}>
        {country && country.name}
      </button>
    </>
  );
}
