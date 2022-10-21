import { IdTokenResult } from "firebase/auth";
import UserProps from "./UserProps";

const initialUser: UserProps = {
  emailVerified: false,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: "",
  tenantId: "",
  delete: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getIdToken: function (forceRefresh?: boolean): Promise<string> {
    throw new Error("Function not implemented.");
  },
  getIdTokenResult: function (forceRefresh?: boolean): Promise<IdTokenResult> {
    throw new Error("Function not implemented.");
  },
  reload: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  toJSON: function (): object {
    throw new Error("Function not implemented.");
  },
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  providerId: "",
  uid: "",
  collections: [],
};

export default initialUser;
