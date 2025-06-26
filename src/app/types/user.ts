// src/app/types/user.ts

export interface RawUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image: string;
  address?: {
    address: string;
    city: string;
  };
  phone: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  age: number;
  department: string;
  rating: number;
  image: string;
  address?: string;
  phone?: string;
  bio?: string;
}
