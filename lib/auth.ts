import bcrypt from 'bcrypt'
import {SignJWT, jwtVerify} from 'jose'
import { db } from './db'

export const hashPassword = (password) => bcrypt.hash(password, 10)

export const comparePasswords = (plainTextPassword, hashedPassword) => bcrypt.compare(plainTextPassword, hashedPassword)


export const createJWT = user => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7;

  return new SignJWT({ payload: { id: user.id, email: user.email } })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
}

export const validateJWT = async (jwt) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload.payload as any;
};

export const getUserFromCookie = async (cookies) => {
  const jwt = cookies.get(process.env.COOKIE_NAME)

  const {id} = await validateJWT(jwt.value)

  const user = await db.user.findUnique({
    where: {
      id
    }
  })

  return user
}