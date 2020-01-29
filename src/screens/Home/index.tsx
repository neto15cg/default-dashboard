import React, {useEffect} from 'react';
import Container from 'src/components/Container';
import Header from 'src/components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'src/store/ducks/state';
import SubContainer from 'src/components/SubContainer';
import SubHeader from 'src/components/SubHeader';
import Country from 'src/components/Country';
import {listCountries, CountryType} from 'src/store/ducks/countries';
import Input from 'src/components/Input';
import Select from 'src/components/Select';
import {useHistory} from 'react-router-dom';
import ReactLoading from 'react-loading';
import {colorText} from 'src/util/Colors';

import './style.css';

export default function Home() {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );
  const countries = useSelector(
    (state: RootState) => state.countries.data.countries,
  );
  const loading = useSelector((state: RootState) => state.countries.loading);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(listCountries());
  }, [dispatch]);

  function handleListCountries(region?: string) {
    dispatch(listCountries(region === 'All' ? undefined : region));
  }

  function handleClickCountry(alpha3Code: string) {
    history.push(`/details/${alpha3Code}`);
  }

  return (
    <Container darkmode={darkmode}>
      <Header title="Where in the world?" />
      <SubContainer darkmode={darkmode}>
        <SubHeader>
          <>
            <Input
              darkmode={darkmode}
              onChangeText={text => dispatch(listCountries(undefined, text))}
            />
            <Select
              darkmode={darkmode}
              opstions={[
                'All',
                'Africa',
                'Americas',
                'Asia',
                'Europe',
                'Oceania',
              ]}
              onClick={option => handleListCountries(option)}
            />
          </>
        </SubHeader>

        {loading['loading.list'] ? (
          <div className="loading">
            <ReactLoading type="spin" color={colorText(darkmode)} />
          </div>
        ) : (
          <div className="body-home">
            {countries.map((item: CountryType, index: number) => {
              const {
                name,
                flag,
                population,
                capital,
                region,
                alpha3Code,
              } = item;
              return (
                <Country
                  key={index}
                  darkmode={darkmode}
                  onClick={() => handleClickCountry(alpha3Code)}
                  flag={flag}
                  name={name}
                  population={population}
                  capital={capital}
                  region={region}
                />
              );
            })}
          </div>
        )}
      </SubContainer>
    </Container>
  );
}
