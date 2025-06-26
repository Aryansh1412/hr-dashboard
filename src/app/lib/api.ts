// src/app/lib/api.ts

import { RawUser, User } from '@/app/types/user';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('https://dummyjson.com/users?limit=20');

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await res.json();

  return data.users.map((u: RawUser): User => ({
    id: u.id,
    firstName: u.firstName,
    lastName: u.lastName,
    fullName: `${u.firstName} ${u.lastName}`,
    email: u.email,
    age: u.age,
    department: ['HR', 'Finance', 'Engineering', 'Marketing'][u.id % 4],
    rating: Math.floor(Math.random() * 5) + 1,
    image: u.image,
    address: `${u.address?.address || 'N/A'}, ${u.address?.city || ''}`,
    phone: u.phone,
    bio: '',
  }));
};
