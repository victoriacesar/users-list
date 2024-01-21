import { parse, format } from 'date-fns';

export const formatDate = (date: string) => {
  return format(parse(date, 'dd-MM-yyyy', new Date()), 'dd/MM/yyyy');
};
