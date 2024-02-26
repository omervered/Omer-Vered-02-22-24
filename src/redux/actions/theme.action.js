import { store } from "../store";

import { SET_THEME } from "../reducers/theme.reducer";

export async function setTheme(isDarkMode) {
  try {
    store.dispatch({
      type: SET_THEME,
      payload: { isDarkMode },
    });
  } catch (error) {
    console.error("Error setting theme:", error);
    throw error;
  }
}
