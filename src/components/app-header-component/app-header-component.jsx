import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

import * as Styles from "./app-header-component-styles";
import { setTheme } from "../../redux/actions/theme.action";
import { useAppHeaderConnector } from "./use-app-header-connector";

export default function AppHeaderComponent() {
  const { isDarkMode } = useAppHeaderConnector();

  const toggleDarkMode = () => {
    setTheme(!isDarkMode);
  };

  return (
    <Styles.AppHeader>
      <Styles.AppHeaderWrapper>
        <Styles.TitleWrapper>
          <Styles.Title>The Weather Frog</Styles.Title>
          <Styles.Subtitle>your trusted weather forecaster </Styles.Subtitle>
        </Styles.TitleWrapper>
      </Styles.AppHeaderWrapper>

      <Styles.Nav>
        <Styles.NavLink to="/">Home</Styles.NavLink>
        <Styles.NavLink to="/fav">Favourites</Styles.NavLink>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
          label={isDarkMode ? "🌒" : "☀️"}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Styles.Nav>
    </Styles.AppHeader>
  );
}
