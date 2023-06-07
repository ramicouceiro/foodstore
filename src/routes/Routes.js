import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Menu from "../pages/Menu/Menu.jsx";
import Home from "../pages/Home/Home.jsx";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/home' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
    </ReactDomRoutes>
  );
}

export default Routes;
