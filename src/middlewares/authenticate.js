import createHttpError from 'http-errors';
import { SessionsCollection } from '../db/models/session.js';
import { UserCollection } from '../db/models/user.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    next(createHttpError(401, 'Please provide an Authorization header.'));
    return;
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Invalid token.'));
    return;
  }

  const session = await SessionsCollection.findOne({ accessToken: token });

  if (!session) {
    next(createHttpError(401, 'Invalid token. session not found.'));
    return;
  }

  const user = await UserCollection.findById(session.userId);

  if (!user) {
    next(createHttpError(401));
    return;
  }

  req.user = user;
  next();
};
