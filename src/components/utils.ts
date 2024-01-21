import { ITableData } from '@/hooks';
import { isValid, parse } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

interface FilterItem {
  value: string;
  label: string;
}

interface Filters {
  [key: string]: FilterItem[];
}
interface FiltersItems {
  columns: FilterItem[];
  filters: Filters;
}

export interface Filter {
  id: string;
  column: string;
  comparation: string;
  componentValue: {
    date: Date;
    text: string;
  };
  condition: string;
}

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
export const filtersItems: FiltersItems = {
  columns: [
    {
      value: 'registrationDate',
      label: 'Data de cadastro',
    },
    {
      value: 'status',
      label: 'Status',
    },
  ],
  filters: {
    registrationDate: [
      {
        value: 'isEqual',
        label: 'é',
      },
      {
        value: 'moreThan',
        label: 'mais que',
      },
      {
        value: 'lessThan',
        label: 'menos que',
      },
    ],
    status: [
      {
        value: 'isEqual',
        label: 'é',
      },
    ],
  },
};

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

export const createNewFilter = () => {
  return {
    id: uuidv4(),
    column: '',
    comparation: '',
    componentValue: {
      date: new Date(),
      text: '',
    },
    condition: 'e',
  };
};
