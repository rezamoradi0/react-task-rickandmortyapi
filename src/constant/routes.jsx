import { Outlet, useRoutes } from "react-router-dom";
import Characters from "../pages/Characters";
import Search from "../pages/Search";
import Character from "../pages/Characters/Character";
import ButtonLink from "../components/modules/ButttonLink";

function AppRoutes() {
  const MainWrapper = () => {
    return (
      <div className="flex flex-col   min-h-svh">
        <header className="w-full h-16 gap-x-12 flex py-4 px-4 mb-5">
          <ButtonLink text={"Home"} link={"/"}/>
          <ButtonLink text={"Search"} link={"/search"}/>
        </header>
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
