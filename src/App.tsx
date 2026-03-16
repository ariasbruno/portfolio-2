import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import CustomCursor from './components/ui/custom-cursor/CustomCursor';

// Lazy load page components
const Home = React.lazy(() => import('./pages/Home'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage'));
const TorneitosPage = React.lazy(() => import('./pages/torneitos/page'));
const RinconCaseroPage = React.lazy(() => import('./pages/rincon-casero/page'));
const ImpostorFutboleroPage = React.lazy(() => import('./pages/impostor-futbolero/page'));
const DilegnoPage = React.lazy(() => import('./pages/dilegno/page'));
const ImpostarPage = React.lazy(() => import('./pages/impostar/page'));
const RCCommanderPage = React.lazy(() => import('./pages/rc-commander/page'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/work/rincon-casero",
    element: <RinconCaseroPage />,
  },
  {
    path: "/work/torneitos",
    element: <TorneitosPage />,
  },
  {
    path: "/work/impostor-futbolero",
    element: <ImpostorFutboleroPage />,
  },
  {
    path: "/work/dilegno",
    element: <DilegnoPage />,
  },
  {
    path: "/work/impostar",
    element: <ImpostarPage />,
  },
  {
    path: "/work/rc-commander",
    element: <RCCommanderPage />,
  },
  {
    path: "/work/:slug",
    element: <ProjectPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

function App() {
  return (
    <div className="cursor-none">
      <CustomCursor />
      <Suspense fallback={<div className="min-h-screen bg-brand-dark" />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
