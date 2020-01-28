import React from 'react';
import './style.css';
import {colorBackground} from 'src/util/Colors';

export interface Props {
  darkmode: boolean;
}

export default function SubContainer(props: React.PropsWithChildren<Props>) {
  const {children, darkmode} = props;
  return (
    <div
      style={{
        backgroundColor: colorBackground(darkmode),
      }}
      className="sub-container">
      {children}
    </div>
  );
}
