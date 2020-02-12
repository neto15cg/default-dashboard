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
  :focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
`;

export const ButtonItem = styled.button<any>`
  background-color: ${(prop: any) =>
    prop.selected ? `${Colors.backgroundItemSelected}` : 'transparent'};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 30px;
  width: 100%;
  margin: 20px 0 10px 0;
  position: relative;
  :focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
`;

export const BadgeItemMenu = styled.div`
  width: 4px;
  height: 30px;
  opacity: 0;
  background-color: ${Colors.backgroundSelected};
  position: absolute;
  left: 0;
  animation: badge 1s forwards;
  animation-delay: 0s;
  @keyframes badge {
    100% {
      opacity: 1;
    }
  }
`;

export const ExpandedMenu = styled.div`
  min-width: 100px;
  height: 100%;
  background: ${Colors.backgroundDark};
  animation: slide 0.5s forwards;
  animation-delay: 0s;
  @keyframes slide {
    100% {
      min-width: 220px;
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
  opacity: 0;
  font-size: 19px;
  font-weight: 400;
  animation: title 1s forwards;
  animation-delay: 0s;
  font-family: NunitoSans;
  @keyframes title {
    100% {
      opacity: 1;
    }
  }
`;

export const ReducedMenuBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
