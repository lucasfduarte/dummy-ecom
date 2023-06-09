import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route Component={Home} path="/" />
      <Route Component={Cart} path="/cart" />
    </BrowserRouter>
  );
};

export default Routes;
