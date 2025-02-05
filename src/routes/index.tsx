import { Home } from "pages/Home";
import { Route, Routes } from "react-router-dom";

export const RootRoutes = () => {
  const rotas = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];

  return (
    <Routes>
      {rotas.map((e, i) => (
        <Route key={i} path={e.path} element={e.element} />
      ))}
    </Routes>
  );
};
