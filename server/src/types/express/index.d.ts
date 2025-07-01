import { User } from '../../models/User'; // adjust this if your user type is elsewhere

declare module 'express-serve-static-core' {
  interface Request {
    user?: User; // or use appropriate type for your user
  }
}
