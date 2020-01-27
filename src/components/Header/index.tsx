import React from 'react';
import './style.css';
//@ts-ignore
import MoonIcon from 'react-ionicons/lib/IosMoon';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'src/store/ducks/state';
import {changeDarkmode} from 'src/store/ducks/darkmode';

export interface Props {
  title: string;
}

export default function Header(props: Props) {
  const darkmode = useSelector(
    (state: RootState) => state.darkmode.data.darkmode,
  );

  const {title} = props;

  const dispatch = useDispatch();

  function handleChangeDarkmode() {
    dispatch(changeDarkmode());
  }

  return (
    <header
      className="container-header"
      style={{
        backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
      }}>
      <div className="sub-container-header">
        <h1
          className="title-header"
          style={{color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}}>
          {title}
        </h1>
        <div
          className="button-header"
          style={{color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}}
          onClick={() => handleChangeDarkmode()}>
          <MoonIcon
            fontSize="20px"
            color={darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'}
            style={{marginRight: 5}}
          />
          Dark Mode
        </div>
      </div>
    </header>
  );
}
