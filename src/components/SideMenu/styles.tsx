import styled from 'styled-components';
import Colors from 'src/util/Colors';

export const Body = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
`;

export const HeaderMenu = styled.header`
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ReducedMenu = styled.div`
  display: flex;
  background-color: ${Colors.backgroundMenu};
  min-width: 60px;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpandedMenu = styled.div`
  min-width: 220px;
  position: relative;
`;

export const ExpandedMenuBody = styled.div`
  position: absolute;
  left: -100px;
  width: 100%;
  height: 100%;
  background: ${Colors.backgroundDark};
  animation: slide 0.2s forwards;
  animation-delay: 0s;
  @keyframes slide {
    100% {
      left: 0;
    }
  }
`;

export const ExpandedMenuHeaderBody = styled.div`
  width: 80%;
  height: 100%;
  border-bottom-width: 1px;
  border-style: none none solid none;
  border-color: ${Colors.borderDark};
`;

export const ExpandedMenuTitle = styled.h1`
  color: ${Colors.item};
  font-size: 19px;
  font-weight: 400;
`;

export const ReducedMenuBody = styled.div`
  width: 100%;
  height: 100%;
`;
