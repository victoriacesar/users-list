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
        label: 'maior que',
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

enum OrderBy {
  isEqual = 'isEqual',
  moreThan = 'moreThan',
  lessThan = 'lessThan',
}

enum Status {
  'active' = 'Ativo',
  'inactive' = 'Inativo',
}

export const advancedFilters = (filters: Filter[], data: ITableData[]) => {
  const filterData = data.filter((dataItem) => {
    return filters.reduce((filter, item) => {
      const condition = item.condition === 'e' ? '&&' : '||';

      if (!item.column || !item.comparation) {
        return true;
      }

      let valueA: Date | string = getValue(dataItem[item.column]);
      const valueB = getValue(
        Status[item.componentValue.text as keyof typeof Status] || item.componentValue.date
      );

      if (item.column === 'registrationDate') {
        valueA = parse(String(dataItem[item.column]), 'dd-MM-yyyy', new Date());
      }

      switch (item.comparation) {
        case OrderBy.isEqual:
          return condition === '&&' ? filter && valueA === valueB : filter || valueA === valueB;
        case OrderBy.moreThan:
          return condition === '&&' ? filter && valueA > valueB : filter || valueA > valueB;
        case OrderBy.lessThan:
          return condition === '&&' ? filter && valueA < valueB : filter || valueA < valueB;
        default:
          return filter;
      }
    }, true);
  });

  return filterData;
};
