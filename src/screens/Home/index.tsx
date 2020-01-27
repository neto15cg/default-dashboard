import React, {useEffect} from 'react';
import Container from 'src/components/Container';
import Header from 'src/components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'src/store/ducks/state';
import SubContainer from 'src/components/SubContainer';
import SubHeader from 'src/components/SubHeader';
import Contry from 'src/components/Country';
import {listCountries} from 'src/store/ducks/countries';

import './style.css';

export default function Home() {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );
  const countries = useSelector(
    (state: RootState) => state.countries.data.countries,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCountries());
  }, [dispatch]);

  function handleListCountries(region?: string) {
    dispatch(listCountries(region));
  }

  return (
    <Container darkmode={darkmode}>
      <Header title="Where in the world?" />
      <SubContainer darkmode={darkmode}>
        <SubHeader
          darkmode={darkmode}
          onChangeText={text => dispatch(listCountries(undefined, text))}
          onSelectFilter={(filter: string) => handleListCountries(filter)}
        />
        <div className="body-home">
          {countries.map((item: any, index: number) => {
            const {name, flag, population, capital, region} = item;
            return (
              <Contry
                key={index}
                darkmode={darkmode}
                onClick={() => 'CLICADO'}
                flag={flag}
                name={name}
                population={population}
                capital={capital}
                region={region}
              />
            );
          })}
        </div>
      </SubContainer>
    </Container>
  );
}
