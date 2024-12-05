import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

import { Layout } from './components/Layout/Layout';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user ...</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
