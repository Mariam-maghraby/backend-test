// import { User } from "./models/User";

declare namespace Express {
  // Can't import at top of file!! See: https://stackoverflow.com/a/51114250/530309
  type User = import("./models/User").User;
  // type IJwtClaims = import("./utils/tokenUtils").IJwtClaims;

  export interface Request {
    // auth?: IJwtClaims; // added by: [auth.middleware]
    user?: User; // added by: [members.middleware, authMemberMachineToken.middleware]
  }
}
