import { createBrowserHistory } from "history";

import { ROUTING } from "../constants/Routing";

import history from "../history";

export const redirect = store => next => action => {
  //eslint-disable-line no-unused-vars

  if (action.type === ROUTING) {
    history[action.payload.method](action.payload.nextUrl);
  }
  return next(action);
};
