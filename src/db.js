// Demo user data
const users = [
  {
    id: '1',
    name: 'John',
    email: 'john@gmail.com',
    age: 27,
  },
  {
    id: '2',
    name: 'Sara',
    email: 'sara@gmail.com',
  },
];

const posts = [
  {
    id: 'p1',
    title: 'Post 1',
    body: 'Body 1',
    published: true,
    author: '1',
  },
  {
    id: 'p2',
    title: 'Post 2',
    body: 'Body 2',
    published: true,
    author: '1',
  },
  {
    id: 'p3',
    title: 'Post 3',
    body: 'Body 3',
    published: false,
    author: '2',
  },
];

const comments = [
  {
    id: 'q1',
    text: 'Comment 1',
    author: '1',
    post: 'p1',
  },
  {
    id: 'q2',
    text: 'Comment 2',
    author: '1',
    post: 'p1',
  },
  {
    id: 'q3',
    text: 'Comment 3',
    author: '2',
    post: 'p2',
  },
  {
    id: 'q4',
    text: 'Comment 4',
    author: '2',
    post: 'p3',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
