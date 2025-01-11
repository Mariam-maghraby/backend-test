import jwt from "jsonwebtoken";

export function generateAccessToken(username: object): string {
  const tokenSecret = process.env.TOKEN_SECRET as string;
  return jwt.sign(username, tokenSecret, { expiresIn: "30m" }); //token exires after 30 minutes
}
