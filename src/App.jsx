import { Routes, Route } from "react-router-dom";

import AppHeaderComponent from "./components/app-header-component/app-header-component";

import routes from "./routes";

import { GlobalStyles } from "./assets/golbal-styles";

function App() {
  return (
    <>
      <GlobalStyles />
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
