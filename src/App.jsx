import { useDispatch } from 'react-redux';
import { Layout, PrivateRoute, RestrictedRoute } from './components';
import { lazy, useEffect } from 'react';
import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { refreshUser } from './redux/auth/operations';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/Register/Register'));
const LoginPage = lazy(() => import('./pages/Login/Login'));
const Phonebook = lazy(() => import('./pages/Phonebook/Phonebook'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.loader}>
      <Loader />
    </div>
  ) : (
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
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
