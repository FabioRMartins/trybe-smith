import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../interface/usersInterface';

dotenv.config();

const JWT_SECRET: jwt.Secret = process.env.JWT_SECRET || 'suaSenhaSecreta';
const JWT_OPTIONS: SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

const tokenValidation = (data: User) => {
  const token = jwt.sign({ data }, JWT_SECRET, JWT_OPTIONS);
  return token;
};

export default tokenValidation;
