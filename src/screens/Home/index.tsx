import React, {useEffect} from 'react';
import Container from 'src/components/Container';
import Header from 'src/components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'src/store/ducks/state';
import SubContainer from 'src/components/SubContainer';
import SubHeader from 'src/components/SubHeader';
import Contry from 'src/components/Country';
import {listCountries} from 'src/store/ducks/countries';
import Input from 'src/components/Input';
import Select from 'src/components/Select';
import {useHistory} from 'react-router-dom';
import './style.css';

export default function Home() {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );
  const countries = useSelector(
    (state: RootState) => state.countries.data.countries,
  );

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
        <div className="body-home">
          {countries.map((item: any, index: number) => {
            const {name, flag, population, capital, region, alpha3Code} = item;
            return (
              <Contry
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
      </SubContainer>
    </Container>
  );
}
