import React from 'react';
import {colorBackground} from 'src/util/Colors';
import './style.css';

export interface Props {
  darkmode: boolean;
}

export default function Container(props: React.PropsWithChildren<Props>) {
  const {children, darkmode} = props;
  return (
    <div
      style={{
        backgroundColor: colorBackground(darkmode),
      }}
      className="container">
      {children}
    </div>
  );
}
