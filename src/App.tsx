import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home/Home';
import type { User } from '@/types/content';
import { fetchUser } from '@/api/dashboard';
import '@/styles/main.scss';

const ContentLibraryPage = lazy(() => import('@/pages/ContentLibraryPage'));
const TemplatesPage = lazy(() => import('@/pages/TemplatesPage'));
const MeetingWorkspacePage = lazy(() => import('@/pages/MeetingWorkspacePage'));
const MyBooksPage = lazy(() => import('@/pages/MyBooksPage'));
const AdminPage = lazy(() => import('@/pages/AdminPage'));

function AppRoutes() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const u = await fetchUser();
        setUser(u);
      } catch {
        setUser(null);
      }
    }
    loadUser();
  }, []);

  return (
    <Layout user={user}>
      <Suspense fallback={<div style={{ padding: 48, textAlign: 'center' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content-library" element={<ContentLibraryPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/meeting-workspace" element={<MeetingWorkspacePage />} />
          <Route path="/my-books" element={<MyBooksPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
