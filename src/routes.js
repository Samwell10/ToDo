import { Navigate, useRoutes } from 'react-router-dom';
import Emailonboard from "./Pages/Onboarding/Emailonboard";
import Onboard from "./Pages/Onboarding/Onboard";
import Create from './Pages/Onboarding/Create';
import Main from './Pages/Main/Main';
import ToDo from './Pages/Main/ToDo';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Onboard/>,
    },
    {
        path: '/email',
        element: <Emailonboard/>,
    },
    {
        path: '/create',
        element: <Create/>,
    },
    {
      path: '/todo',
      element: <Main/>,
    },
    {
      path: '/list',
      element: <ToDo/>,
    },
  ]);
  

  return routes;
}
