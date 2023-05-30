import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Menu from "../pages/Menu/Menu.jsx";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/menu' element={<Menu />} />
    </ReactDomRoutes>
  );
}

export default Routes;
