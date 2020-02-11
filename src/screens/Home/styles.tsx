import styled from 'styled-components';
import Colors from 'src/util/Colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: 'row';
  background-color: ${Colors.background};
`;

export const SideBody = styled.nav`
  display: flex;
  max-width: 280px;
  min-height: 100%;
  background-color: ${Colors.background};
`;

export const MainBody = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  background-color: ${Colors.background};
`;
