import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import Container from 'react-bootstrap/Container';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense className={css.loader} fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
