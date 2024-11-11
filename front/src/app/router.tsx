import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import App from '../App.tsx';
import { UsersPage } from '../pages/users-page';
import { PostPage } from '../pages/user-page';

import { routes } from './routes.ts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.root} element={<App />}>
      <Route path={routes.root} element={<Navigate to={routes.users} />} />

      <Route path={routes.users} element={<UsersPage />} />
      <Route path={routes.user} element={<PostPage />} />
    </Route>,
  ),
);
