import React, {useState} from 'react';
// @ts-ignore
import IosMenu from 'react-ionicons/lib/IosMenu';
import {
  Body,
  ReducedMenu,
  ExpandedMenu,
  ButtonMenu,
  HeaderMenu,
  ExpandedMenuTitle,
  ExpandedMenuHeaderBody,
  ReducedMenuBody,
  ButtonItem,
  BadgeItemMenu,
} from './styles';

export interface Props {
  options: any[];
}

export default function SideMenu(props: React.PropsWithChildren<Props>) {
  const [opened, setOpened] = useState(false);
  const [option, setOption] = useState({title: ''} as any);
  const {title} = option;

  const {options} = props;
  return (
    <Body>
      <ReducedMenu>
        <HeaderMenu>
          <ButtonMenu onClick={() => setOpened(false)}>
            <IosMenu fontSize="22px" color={'#fff'} />
          </ButtonMenu>
        </HeaderMenu>
        <ReducedMenuBody>
          {options.map((item: any) => {
            const {Icon, action} = item;
            return (
              <ButtonItem
                selected={action === option.action}
                key={action}
                onClick={() => {
                  setOpened(!opened);
                  setOption(item);
                }}>
                {action === option.action && <BadgeItemMenu />}
                <Icon />
              </ButtonItem>
            );
          })}
        </ReducedMenuBody>
      </ReducedMenu>
      {opened && (
        <ExpandedMenu>
          <HeaderMenu>
            <ExpandedMenuHeaderBody>
              <ExpandedMenuTitle>{title}</ExpandedMenuTitle>
            </ExpandedMenuHeaderBody>
          </HeaderMenu>
        </ExpandedMenu>
      )}
    </Body>
  );
}
