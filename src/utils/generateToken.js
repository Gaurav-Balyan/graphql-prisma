import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  return jwt.sign({ userId }, 'mysecret');
};

export { generateToken as default };
