import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <div className={css.loader}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
