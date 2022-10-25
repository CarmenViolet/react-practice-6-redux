import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { booksReducer } from "./books/booksReducers";

const enhancer = devToolsEnhancer();
const rootReducer = combineReducers({books: booksReducer});

export const store = createStore(rootReducer, enhancer)