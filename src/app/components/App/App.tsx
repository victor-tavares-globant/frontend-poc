import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { Home } from '@containers';
import { AppLayout } from '@layouts';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.OTHER_PAGE
      }
    ]
  },
  // Redirect to HOME every 404 Not Found
  {
    path: '*',
    element: <Navigate to={ROUTES.HOME} replace />
  }
]);

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
