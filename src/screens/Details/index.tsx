import React, {useEffect} from 'react';
import Container from 'src/components/Container';
import Header from 'src/components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'src/store/ducks/state';
import SubContainer from 'src/components/SubContainer';
import SubHeader from 'src/components/SubHeader';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import Button from 'src/components/Button';
import {
  getCountries,
  CurrencyType,
  LanguagesType,
} from 'src/store/ducks/countries';
import BorderCountry from 'src/components/BorderCountry';
import {colorText} from 'src/util/Colors';
import ReactLoading from 'react-loading';
import './style.css';

export default function Details(props: RouteComponentProps) {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );
  const country = useSelector(
    (state: RootState) => state.countries.data.country,
  );
  const loading = useSelector((state: RootState) => state.countries.loading);
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
    borders,
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
        {loading['loading.get'] ? (
          <div className="loading">
            <ReactLoading type="spin" color={colorText(darkmode)} />
          </div>
        ) : (
          <div className="body-detail">
            <div className="body-content">
              <div className="content">
                <img className="flag-detail" src={flag} alt={name} />
              </div>
            </div>
            <div className="body-content">
              <div className="content-detail">
                <h1
                  className="contry-title-detail"
                  style={{
                    color: colorText(darkmode),
                  }}>
                  {name}
                </h1>
                <div className="content-detail-information">
                  <div className="column">
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Native Name:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {nativeName}
                      </span>
                    </label>
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Population:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {population}
                      </span>
                    </label>
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Region:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {region}
                      </span>
                    </label>
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Sub Region:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {subregion}
                      </span>
                    </label>
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Sub Region:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {capital}
                      </span>
                    </label>
                  </div>
                  <div className="column">
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Top Level Domain:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {topLevelDomain && topLevelDomain.length > 0
                          ? topLevelDomain[0]
                          : ''}
                      </span>
                    </label>
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Currencies:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {currencies &&
                          currencies.map(
                            (currency: CurrencyType, index: number) => {
                              return index === 0
                                ? ` ${currency.name}`
                                : `, ${currency.name}`;
                            },
                          )}
                      </span>
                    </label>
                    <label
                      className="label-country-detail"
                      style={{
                        color: colorText(darkmode),
                      }}>
                      Languages:&nbsp;
                      <span
                        className="value-country-detail"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        {languages &&
                          languages.map(
                            (language: LanguagesType, index: number) => {
                              return index === 0
                                ? ` ${language.name}`
                                : `, ${language.name}`;
                            },
                          )}
                      </span>
                    </label>
                  </div>
                </div>
                {borders && borders.length > 0 && (
                  <>
                    <div className="border-country-body">
                      <label
                        className="label-border-country"
                        style={{
                          color: colorText(darkmode),
                        }}>
                        Border Countries:&nbsp;
                      </label>
                      {borders &&
                        borders.map((alpha3Code: string) => {
                          return (
                            <BorderCountry
                              key={alpha3Code}
                              alpha3Code={alpha3Code}
                              darkmode={darkmode}
                              onClick={() =>
                                history.push(`/details/${alpha3Code}`)
                              }
                            />
                          );
                        })}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </SubContainer>
    </Container>
  );
}
