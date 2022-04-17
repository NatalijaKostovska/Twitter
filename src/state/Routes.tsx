import React from 'react';
import {Route, Routes as RRDRoutes} from 'react-router-dom';
import Comments from '../containers/Home/components/Main/components/Comments/Comments';
import {Main} from '../containers/Home/components/Main/components/Post/Main';
import LoginPage from '../containers/LoginPage/LoginPage';
import PostPage from '../containers/PostPage/PostPage';
import {ProtectedRoute} from './ProtectedRoute';

const Routes = () => {
  return (
    <RRDRoutes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route path="posts/:id" element={<PostPage />} />
      <Route path="/explore" element={<div>expore</div>} />
      <Route path="/notifications" element={<div>notifications</div>} />
      <Route path="/messages" element={<div>messages</div>} />
      <Route path="/bookmarks" element={<div>bookmarks</div>} />
      <Route path="/lists" element={<div>lists</div>} />
      <Route path="/profile" element={<div>profile</div>} />
      <Route path="/more" element={<div>more</div>} />
      <Route path="posts/:id/comments" element={<Comments />} />
      <Route path="login" element={<LoginPage />} />
    </RRDRoutes>
  );
};

export default Routes;
