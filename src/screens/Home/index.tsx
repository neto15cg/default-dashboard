import React from 'react';
import Container from 'src/components/Container';
import Header from 'src/components/Header';
import {useSelector} from 'react-redux';
import {RootState} from 'src/store/ducks/state';
import SubContainer from 'src/components/SubContainer';
import SubHeader from 'src/components/SubHeader';

export default function Home() {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );
  return (
    <Container darkmode={darkmode}>
      <Header title="Where in the world?" />
      <SubContainer darkmode={darkmode}>
        <SubHeader darkmode={darkmode} />
      </SubContainer>
    </Container>
  );
}
