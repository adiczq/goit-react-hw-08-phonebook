import { Layout, PrivateRoute, RestrictedRoute } from './components';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/Register/Register'));
const LoginPage = lazy(() => import('./pages/Login/Login'));
const PhonebookPage = lazy(() => import('./pages/Phonebook/Phonebook'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
