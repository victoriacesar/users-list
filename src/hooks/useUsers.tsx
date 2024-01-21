'use client';

import { api } from '@/services/api';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface UsersContextProviderProps {
  children: ReactNode;
}

interface IUsersContext {
  usersData: ITableData[];
  isLoading: boolean;
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
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    const { data } = await api.get('/users');

    return data;
  };

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const result = await fetchUsers();
      setUsersData(result);
      setIsLoading(false);
    };

    getUsers();
  }, []);

  return (
    <UsersProvider.Provider
      value={{
        usersData,
        isLoading,
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
