import dotenv from 'dotenv';
dotenv.config();

export const config = {
  mongoUri: process.env.MONGO_URI!,
  postgresUrl: process.env.POSTGRES_URL!,
  jwtSecret: process.env.JWT_SECRET!,
  port: process.env.PORT || 5000,
};
