import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("pages/Home"));
const DetailPage = lazy(() => import("pages/Detail"));
const NotFoundPage = lazy(() => import("components/NotFound"));
const Loading = lazy(() => import("components/Loading"));
const Layout = lazy(() => import("components/Layout"));

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post/:id",
    element: <DetailPage />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
