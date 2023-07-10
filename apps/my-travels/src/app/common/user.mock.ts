import {User} from './user.interface';

export const UserMock: User[] = [
  {
    id: 1,
    username: 'eliran4',
    email: 'eliran@e-square.io',
    firstName: 'Eliran',
    lastName: 'Eliassy',
    age: 25,
    isActive: true,
    createdAt: new Date(),
    imageUrlProfile: 'https://i.pravatar.cc/150?img=15',
  },
  {
    id: 2,
    username: 'yonatan4',
    email: 'yonatan@e-square.io',
    firstName: 'Yonatan',
    lastName: 'Altman',
    age: 30,
    isActive: false,
    createdAt: new Date(),
    imageUrlProfile: 'https://i.pravatar.cc/150?img=16',
  },
  // Add more users here...
];
