import React from 'react';
import Container from 'src/components/Container';
import Header from 'src/components/Header';
import {useSelector} from 'react-redux';
import {RootState} from 'src/store/ducks/state';

export default function Home() {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );
  return (
    <Container darkmode={darkmode}>
      <Header title="Where in the world?" />
    </Container>
  );
}
