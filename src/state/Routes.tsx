import React from 'react';
import {Route, Routes as RRDRoutes} from 'react-router-dom';
import Comments from '../containers/Home/components/Main/components/Comments/Comments';
import {Main} from '../containers/Home/components/Main/Main';
import PostPage from '../containers/PostPage/PostPage';

const Routes = () => {
  return (
    <RRDRoutes>
      <Route path="/" element={<Main />} />
      <Route path="posts/:id" element={<PostPage />} />
      <Route path="/explore" element={<div>expore</div>} />
      <Route path="/notifications" element={<div>notifications</div>} />
      <Route path="/messages" element={<div>messages</div>} />
      <Route path="/bookmarks" element={<div>bookmarks</div>} />
      <Route path="/lists" element={<div>lists</div>} />
      <Route path="/profile" element={<div>profile</div>} />
      <Route path="/more" element={<div>more</div>} />
      <Route path="posts/:id/comments" element={<Comments />} />
    </RRDRoutes>
  );
};

export default Routes;
