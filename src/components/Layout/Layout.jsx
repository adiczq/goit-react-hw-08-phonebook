import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import Container from 'react-bootstrap/Container';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Container className="d-flex justify-content-center">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Container>
  );
};
