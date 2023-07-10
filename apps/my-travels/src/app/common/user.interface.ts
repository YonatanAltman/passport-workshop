export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
  imageUrlProfile?: string
}
