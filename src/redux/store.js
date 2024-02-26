import { combineReducers, compose, legacy_createStore as createStore } from "redux";
import { weatherReducer } from "./reducers/weather.reducer";
import { themeReducer } from "./reducers/theme.reducer";

const rootReducer = combineReducers({
  weatherModule: weatherReducer,
  themeModule: themeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

window.gStore = store;
