import React from 'react';
import {Navbar} from '../../containers/Navbar/Navbar';
import {Search} from '../../containers/Search/Search';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function PageWrapper({children}: Props) {
  return (
    <div className="row">
      <Navbar />
      {children}
      <Search />
    </div>
  );
}

export default PageWrapper;
