import React, {useEffect} from 'react';
import Container from 'src/components/Container';
import Header from 'src/components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'src/store/ducks/state';
import SubContainer from 'src/components/SubContainer';
import SubHeader from 'src/components/SubHeader';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import Button from 'src/components/Button';
import {getCountries} from 'src/store/ducks/countries';
import './style.css';

export default function Details(props: RouteComponentProps) {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );

  const country = useSelector(
    (state: RootState) => state.countries.data.country,
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const {match} = props;
  const {params} = match;
  const {alpha3Code} = params as any;

  useEffect(() => {
    dispatch(getCountries(alpha3Code));
  }, [dispatch, alpha3Code]);

  function handleBack() {
    history.push(`/`);
  }

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = country;
  return (
    <Container darkmode={darkmode}>
      <Header title="Where in the world?" />
      <SubContainer darkmode={darkmode}>
        <SubHeader>
          <>
            <Button
              darkmode={darkmode}
              title="Back"
              onClick={() => handleBack()}
            />
          </>
        </SubHeader>
        <div className="body-home">
          <div className="body-content">
            <div className="content">
              <img className="flag-detail" src={flag} alt="country" />
            </div>
          </div>
          <div className="body-content">
            <div className="content-detail">
              <h1
                className="contry-title-detail"
                style={{
                  color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
                }}>
                {name}
              </h1>
              <div className="content-detail-information">
                <div className="column1">
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Native Name:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {nativeName}
                    </span>
                  </label>
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Population:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {population}
                    </span>
                  </label>
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Region:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {region}
                    </span>
                  </label>
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Sub Region:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {subregion}
                    </span>
                  </label>
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Sub Region:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {capital}
                    </span>
                  </label>
                </div>
                <div className="column">
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Top Level Domain:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {topLevelDomain && topLevelDomain.length > 0
                        ? topLevelDomain[0]
                        : ''}
                    </span>
                  </label>
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Currencies:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {currencies &&
                        currencies.map((currency: any, index: number) => {
                          return currencies.length > 1 && index === 0
                            ? ` ${currency.name}`
                            : `, ${currency.name}`;
                        })}
                    </span>
                  </label>
                  <label
                    className="label-country-detail"
                    style={{
                      color: darkmode
                        ? 'hsl(0, 0%, 100%)'
                        : 'hsl(200, 15%, 8%)',
                    }}>
                    Languages:&nbsp;
                    <span
                      className="value-country-detail"
                      style={{
                        color: darkmode
                          ? 'hsl(0, 0%, 100%)'
                          : 'hsl(200, 15%, 8%)',
                      }}>
                      {languages &&
                        languages.map((language: any, index: number) => {
                          return languages.length > 1 && index === 0
                            ? ` ${language.name}`
                            : `, ${language.name}`;
                        })}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SubContainer>
    </Container>
  );
}
