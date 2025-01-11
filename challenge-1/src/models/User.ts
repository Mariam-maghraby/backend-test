import mongoose from "mongoose";

// export class User {
//   username?: string;
//   password?: string;
//   email?: string;
//   role?: string;
// }

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
