import React from 'react';
import {Container, SideBody, MainBody} from './styles';
import SideMenu from 'src/components/SideMenu';
import ContainerBody from 'src/components/ContainerBody';
// @ts-ignore
import IosSpeedometerOutline from 'react-ionicons/lib/IosSpeedometerOutline';

const options = [
  {
    Icon: () => <IosSpeedometerOutline fontSize="22px" color={'#fff'} />,
    title: 'Finance',
    action: 'finance',
  },
];

export default function Home() {
  return (
    <Container>
      <SideBody>
        <SideMenu options={options} />
      </SideBody>
      <MainBody>
        <ContainerBody></ContainerBody>
      </MainBody>
    </Container>
  );
}
