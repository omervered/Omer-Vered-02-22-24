import { Routes, Route } from "react-router-dom";

import routes from "./routes";

import AppHeaderComponent from "./components/app-header-component/app-header-component";

function App() {
  return (
    <>
      <AppHeaderComponent />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
