import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../src/prisma';

const userOne = {
  input: {
    name: 'Jane',
    email: 'jane@gmail.com',
    password: bcrypt.hashSync('qwertyuio'),
  },
  user: undefined,
  jwt: undefined,
};

const userTwo = {
  input: {
    name: 'Rachel',
    email: 'rachel@gmail.com',
    password: bcrypt.hashSync('qwertyuio'),
  },
  user: undefined,
  jwt: undefined,
};

const postOne = {
  input: {
    title: 'Test Post 1',
    body: 'Body Post 1',
    published: true,
  },
  post: undefined,
};

const postTwo = {
  input: {
    title: 'Test Post 2',
    body: 'Body Post 2',
    published: false,
  },
  post: undefined,
};

const commentOne = {
  input: {
    text: 'Great Post',
  },
  comment: undefined,
};

const commentTwo = {
  input: {
    text: 'I am glad for your response',
  },
  comment: undefined,
};

const seedDatabase = async () => {
  jest.setTimeout(50000);

  // Delete test data
  await prisma.mutation.deleteManyComments();
  await prisma.mutation.deleteManyPosts();
  await prisma.mutation.deleteManyUsers();

  // Create user one
  userOne.user = await prisma.mutation.createUser({
    data: userOne.input,
  });
  userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);

  // Create user two
  userTwo.user = await prisma.mutation.createUser({
    data: userTwo.input,
  });
  userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET);

  // Create post one
  postOne.post = await prisma.mutation.createPost({
    data: {
      ...postOne.input,
      author: {
        connect: {
          id: userOne.user.id,
        },
      },
    },
  });

  // Create post 2
  postTwo.post = await prisma.mutation.createPost({
    data: {
      ...postTwo.input,
      author: {
        connect: {
          id: userOne.user.id,
        },
      },
    },
  });

  // Create comment one
  commentOne.comment = await prisma.mutation.createComment({
    data: {
      ...commentOne.input,
      author: {
        connect: {
          id: userTwo.user.id,
        },
      },
      post: {
        connect: {
          id: postOne.post.id,
        },
      },
    },
  });

  // Create comment two
  commentTwo.comment = await prisma.mutation.createComment({
    data: {
      ...commentTwo.input,
      author: {
        connect: {
          id: userOne.user.id,
        },
      },
      post: {
        connect: {
          id: postOne.post.id,
        },
      },
    },
  });
};

export {
  seedDatabase as default,
  userOne,
  userTwo,
  postOne,
  postTwo,
  commentOne,
  commentTwo,
};
