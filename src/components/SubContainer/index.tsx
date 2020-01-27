import React from 'react';

import './style.css';

export interface Props {
  darkmode?: boolean;
}

export default function SubContainer(props: React.PropsWithChildren<Props>) {
  const {children, darkmode} = props;
  return (
    <div
      style={{
        backgroundColor: darkmode ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
      }}
      className="SubContainer">
      {children}
    </div>
  );
}
