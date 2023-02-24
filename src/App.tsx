import { useRoutes } from 'react-router-dom';

import Login from 'src/pages/Auth/Login';
import Dashboard from 'src/pages/Dashboard';
import ResetPassword from 'src/pages/Auth/ResetPassword';
import Timesheets from 'src/pages/Dashboard/Timesheets';
import Client from 'src/pages/Dashboard/Clients/Client';
import AddClient from 'src/pages/Dashboard/Clients/AddClient';
import AddTimesheetPage from 'src/pages/Dashboard/Timesheets/AddTimesheet';
import Timesheet from 'src/pages/Dashboard/Timesheets/Timesheet';

function App() {
  const router = useRoutes([
    { path: '/', element: <Login /> },
    {
      path: '/dashboard',
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'clients/:id', element: <Client /> },
        { path: 'clients/add-client', element: <AddClient /> },
        { path: 'timesheets', element: <Timesheets /> },
        { path: 'timesheets/:id', element: <Timesheet /> },
        { path: 'timesheets/add-timesheet', element: <AddTimesheetPage /> },
      ],
    },
    { path: '/forgot-password', element: <ResetPassword /> },
    { path: '*', element: <h1>Page not found</h1> },
  ]);
  return <>{router}</>;
}

export default App;
