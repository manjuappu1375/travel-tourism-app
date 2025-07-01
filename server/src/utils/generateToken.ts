import jwt from 'jsonwebtoken';
import { config } from '../config/envConfig';

export const generateToken = (id: string) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: '30d',
  });
};
