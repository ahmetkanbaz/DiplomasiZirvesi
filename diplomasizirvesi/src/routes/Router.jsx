import { useRoutes } from "react-router-dom";
import Home from "../views/Home/Home";

const Router = () => {
<<<<<<< Updated upstream
  const routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

export default Router;
=======
    const routes = useRoutes(
        [
            { path: '/', element: < Home />}
        ]
    )
    return routes
}

export default Router
>>>>>>> Stashed changes
