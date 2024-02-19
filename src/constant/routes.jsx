import { Outlet, useRoutes } from "react-router-dom";
import Characters from "../pages/Characters";
import Search from "../pages/Search";
import Character from "../pages/Characters/Character";

function AppRoutes() {
  const MainWrapper = () => {
    return (
      <div>
        <header>Header</header>
        <Outlet />
        <footer>Footer</footer>
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
