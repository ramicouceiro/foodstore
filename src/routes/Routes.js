import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Menu from "../pages/Menu/Menu.jsx";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Menu />} />
    </ReactDomRoutes>
  );
}

export default Routes;
