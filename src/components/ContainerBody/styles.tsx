import styled from 'styled-components';
import Colors from 'src/util/Colors';

export const Body = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
`;

export const Header = styled.header`
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.backgroundHeader};
  border-bottom-width: 1px;
  border-style: none none solid none;
  border-color: ${Colors.border};
`;
