import React from 'react';
import {Route, Routes as RRDRoutes} from 'react-router-dom';
import {Main} from '../containers/Home/components/Main/components/Post/Main';

const Routes = () => {
  return (
    <RRDRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/explore" element={<div>expore</div>} />
      <Route path="/notifications" element={<div>notifications</div>} />
      <Route path="/messages" element={<div>messages</div>} />
      <Route path="/bookmarks" element={<div>bookmarks</div>} />
      <Route path="/lists" element={<div>lists</div>} />
      <Route path="/profile" element={<div>profile</div>} />
      <Route path="/more" element={<div>more</div>} />
    </RRDRoutes>
  );
};

export default Routes;
