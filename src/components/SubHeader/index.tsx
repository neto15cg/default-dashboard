import React from 'react';
import './style.css';

export interface Props {}

export default function SubHeader(props: React.PropsWithChildren<Props>) {
  const {children} = props;
  return <div className="container-sub-header">{children}</div>;
}
