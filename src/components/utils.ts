import { ITableData } from '@/mockedData';
import { isValid, parse } from 'date-fns';

export const tableHeaderItems = ['ID', 'Nome', 'Telefone', 'Data de cadastro', 'Status', ' '];
export const sortByItems = [
  {
    label: 'ID',
    value: 'id',
  },
  {
    label: 'Nome',
    value: 'name',
  },
  {
    label: 'Telefone',
    value: 'phone',
  },
  {
    label: 'Data de cadastro',
    value: 'registrationDate',
  },
  {
    label: 'Status',
    value: 'status',
  },
];

const getValue = (value: string | number): string => {
  if (typeof value === 'number') {
    return String(value);
  }

  return value as string;
};

const isValidDate = (dateString: string): boolean => {
  return typeof dateString === 'string' && isValid(parse(dateString, 'dd-MM-yyyy', new Date()));
};

const compareValues = (valueA: string, valueB: string): number => {
  if (isValidDate(valueA) && isValidDate(valueB)) {
    const dateA = parse(valueA, 'dd-MM-yyyy', new Date());
    const dateB = parse(valueB, 'dd-MM-yyyy', new Date());
    return dateA.getTime() - dateB.getTime();
  }

  return valueA?.localeCompare(valueB);
};

export const sortData = (dataToSort: ITableData[], sortBy: string, orderBy: string) => {
  const sortedData = dataToSort.sort((a, b) => {
    const values = orderBy === 'asc' ? [a, b] : [b, a];

    const valueA = getValue(values[0][sortBy]);
    const valueB = getValue(values[1][sortBy]);

    return compareValues(valueA, valueB);
  });

  return sortBy && dataToSort.length > 0 ? sortedData : dataToSort;
};