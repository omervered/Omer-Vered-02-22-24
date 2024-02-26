import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./assets/theme";
import { GlobalStyles } from "./assets/golbal-styles";

import AppHeaderComponent from "./components/app-header-component/app-header-component";

import routes from "./routes";

function App() {
  const isDarkMode = useSelector((state) => state.themeModule.isDarkMode);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <AppHeaderComponent />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
