export const SET_THEME = "SET_THEME";

const initialState = {
  isDarkMode: false,
};

export function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        isDarkMode: action.payload.isDarkMode,
      };

    default:
      return state;
  }
}
