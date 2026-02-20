// here we store the reducer and apply middleware for fetching dat from api

import { applyMiddleware, createStore } from "redux";
import { thunk } from "react-redux";
import reducer from "../reducers/reducer"

export const store = createStore(reducer, applyMiddleware(thunk));