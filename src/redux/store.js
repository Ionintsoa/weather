import { createStore, combineReducers, applyMiddleware } from "redux";
import weatherReducer from "./reducers/weatherReducer";
import locationReducer from "./reducers/locationReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  locationReducer,
  weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
