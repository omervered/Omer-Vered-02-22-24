import { Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
// import { lightTheme, darkTheme } from "./";

import AppHeaderComponent from "./components/app-header-component/app-header-component";

import routes from "./routes";

import { GlobalStyles } from "./assets/golbal-styles";

function App() {
  const isDarkMode = useSelector((state) => state.themeModule.isDarkMode);
  console.log("isDarkMode:", isDarkMode);

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
