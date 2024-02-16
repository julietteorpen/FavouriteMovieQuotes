import { combineReducers } from "redux";
import quotesReducer from "../slices/quotes";

// creating a rootReducer means as the app expands, more reducer can easily be incorporated to the store
export default rootReducer = combineReducers({
  quotes: quotesReducer,
});
