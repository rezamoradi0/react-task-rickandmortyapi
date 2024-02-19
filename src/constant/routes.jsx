import { Outlet, useRoutes } from "react-router-dom";
import Characters from "../pages/Characters";
import Search from "../pages/Search";
import Character from "../pages/Characters/Character";

function AppRoutes() {
  const MainWrapper = () => {
    return (
      <div className="flex flex-col   min-h-svh">
        <header className="w-full h-12">Header</header>
        <Outlet />
        <footer className="w-full h-12 mt-auto">Footer</footer>
      </div>
    );
  };

  const routes = useRoutes([
    {
      path: "/",
      element: <MainWrapper />,
      children: [
        {
          index: true,
          element: <Characters />,
        },
        {
          path: "/character",
          children: [{ path: ":characterId", element: <Character /> }],
        },
        { path: "/search", element: <Search /> },
      ],
    },
  ]);
  return routes;
}

export default AppRoutes;
