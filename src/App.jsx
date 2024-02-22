import { Routes, Route } from "react-router-dom";

import AppHeaderComponent from "./components/app-header-component/app-header-component";

function App() {
  return (
    <>
      <AppHeaderComponent />
      {/* <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes> */}
    </>
  );
}

export default App;
