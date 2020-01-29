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
                    <Label
                      darkmode={darkmode}
                      label={'Native Name'}
                      content={nativeName}
                    />
                    <Label
                      darkmode={darkmode}
                      label={'Population'}
                      content={population}
                    />
                    <Label
                      darkmode={darkmode}
                      label={'Region'}
                      content={region}
                    />
                    <Label
                      darkmode={darkmode}
                      label={'Sub Region'}
                      content={subregion}
                    />
                    <Label
                      darkmode={darkmode}
                      label={'Capital'}
                      content={capital}
                    />
                  </div>
                  <div className="column">
                    <Label
                      darkmode={darkmode}
                      label={'Top Level Domain'}
                      content={topLevelDomain && topLevelDomain.toString()}
                    />

                    <Label
                      darkmode={darkmode}
                      label={'Currencies'}
                      content={
                        currencies &&
                        currencies.map(
                          (currency: CurrencyType, index: number) => {
                            return index === 0
                              ? ` ${currency.name}`
                              : `, ${currency.name}`;
                          },
                        )
                      }
                    />
                    <Label
                      darkmode={darkmode}
                      label={'Languages'}
                      content={
                        languages &&
                        languages.map(
                          (language: LanguagesType, index: number) => {
                            return index === 0
                              ? ` ${language.name}`
                              : `, ${language.name}`;
                          },
                        )
                      }
                    />
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

export interface LabelProps {
  darkmode: boolean;
  label: string;
  content: string | number | any;
}

const Label = (props: LabelProps) => {
  const {darkmode, label, content} = props;
  return (
    <label
      className="label-country-detail"
      style={{
        color: colorText(darkmode),
      }}>
      {label}:&nbsp;
      <span
        className="value-country-detail"
        style={{
          color: colorText(darkmode),
        }}>
        {content}
      </span>
    </label>
  );
};
