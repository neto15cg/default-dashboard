import React, {useState} from 'react';
// @ts-ignore
import IosMenu from 'react-ionicons/lib/IosMenu';
import {
  Body,
  ReducedMenu,
  ExpandedMenu,
  ButtonMenu,
  ExpandedMenuBody,
  HeaderMenu,
  ExpandedMenuTitle,
  ExpandedMenuHeaderBody,
  ReducedMenuBody,
} from './styles';

export interface Props {}

export default function SideMenu(props: React.PropsWithChildren<Props>) {
  const [opened, setOpened] = useState(false);
  return (
    <Body>
      <ReducedMenu>
        <HeaderMenu>
          <ButtonMenu onClick={() => setOpened(!opened)}>
            <IosMenu fontSize="20px" color={'#fff'} />
          </ButtonMenu>
        </HeaderMenu>
        <ReducedMenuBody></ReducedMenuBody>
      </ReducedMenu>
      {opened && (
        <ExpandedMenu>
          <ExpandedMenuBody>
            <HeaderMenu>
              <ExpandedMenuHeaderBody>
                <ExpandedMenuTitle>Finance</ExpandedMenuTitle>
              </ExpandedMenuHeaderBody>
            </HeaderMenu>
          </ExpandedMenuBody>
        </ExpandedMenu>
      )}
    </Body>
  );
}
