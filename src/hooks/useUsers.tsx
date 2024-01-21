'use client';

import { api } from '@/services/api';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface UsersContextProviderProps {
  children: ReactNode;
}

interface IUsersContext {
  usersData: ITableData[];
}

export interface ITableData {
  id: number;
  name: string;
  phone: string;
  registrationDate: string;
  status: string;
  [key: string]: string | number;
}

const UsersProvider = createContext<IUsersContext>({} as IUsersContext);

export function UsersProviderProvider({ children }: UsersContextProviderProps): JSX.Element {
  const [usersData, setUsersData] = useState<ITableData[]>([]);

  const fetchUsers = async () => {
    const { data } = await api.get('/users');

    return data;
  };

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchUsers();
      setUsersData(result);
    };

    getUsers();
  }, []);

  return (
    <UsersProvider.Provider
      value={{
        usersData,
      }}
    >
      {children}
    </UsersProvider.Provider>
  );
}

export function useUsers(): IUsersContext {
  const context = useContext(UsersProvider);

  return context;
}
