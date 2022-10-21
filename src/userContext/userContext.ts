import { createContext } from "react";
import AppProps from "./AppProps";
import initialUser from "./initialUser";

export default createContext<AppProps>({
  user: initialUser,
  loadingUser: true,
  error: null,
});
