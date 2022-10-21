import UserProps from "./UserProps";

export default interface AppProps {
  user: UserProps;
  loadingUser: boolean;
  error: Error | null;
}
