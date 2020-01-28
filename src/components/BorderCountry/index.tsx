import React, {useEffect, useState} from 'react';
import api from 'src/services/api';
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
          backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
          color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
        }}>
        {country && country.name}
      </button>
    </>
  );
}
