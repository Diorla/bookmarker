import { User } from "firebase/auth";

export default interface UserProps extends User {
  collections: string[];
}
