import React from 'react';
import {Container, SideBody, MainBody} from './styles';
import SideMenu from 'src/components/SideMenu';
import ContainerBody from 'src/components/ContainerBody';

export default function Home() {
  return (
    <Container>
      <SideBody>
        <SideMenu />
      </SideBody>
      <MainBody>
        <ContainerBody></ContainerBody>
      </MainBody>
    </Container>
  );
}
