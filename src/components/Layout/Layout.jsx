import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { AppFooter } from '../AppFooter/AppFooter';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
      <AppFooter />
    </>
  );
};
