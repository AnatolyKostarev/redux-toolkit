import React from "react";
import PostContainer from "./components/PostContainer";
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";

function App() {
  return useRoutes(routes);
}

export default App;
