import React from 'react';
import {Container, SideBody, MainBody} from './styles';
import SideMenu from 'src/components/SideMenu';

export default function Home() {
  return (
    <Container>
      <SideBody>
        <SideMenu />
      </SideBody>
      <MainBody />
    </Container>
  );
}
