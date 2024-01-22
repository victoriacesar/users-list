import { UsersMenu, UsersMenuProps } from '@/components/UsersPage';
import { ThemeContextProvider, UsersProviderProvider } from '@/hooks';
import { api } from '@/services/api';
import { fireEvent, render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { usersMock } from '../mock/usersMock';
import { act } from 'react-dom/test-utils';
import { sortByItems } from '@/components/utils';

let mockProps: UsersMenuProps;

const UsersMenuMock = (props: UsersMenuProps) => {
  return (
    <ThemeContextProvider>
      <UsersProviderProvider>
        <UsersMenu {...mockProps} {...props} />
      </UsersProviderProvider>
    </ThemeContextProvider>
  );
};

describe('UsersMenu', () => {
  let mock: InstanceType<typeof MockAdapter>;

  beforeAll(() => {
    mock = new MockAdapter(api);
    mock.onGet(`/users`).reply(200, usersMock);
  });

  beforeEach(() => {
    mockProps = {
      filtersRows: [],
      inputSearch: '',
      orderBy: '',
      setFiltersRows: () => {},
      setInputSearch: () => {},
      setOrderBy: () => {},
      setSortBy: () => {},
      sortBy: '',
    };
  });

  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });

  it('should render component with elements', async () => {
    await act(async () => {
      render(<UsersMenuMock {...mockProps} />);
    });

    const inputSearch = screen.getByPlaceholderText('Pesquisar ID ou nome ou telefone...');
    const orderByBtn = screen.getByRole('button', { name: 'Ordenar por' });
    const filtersBtn = screen.getByRole('button', { name: 'Filtrar por' });

    expect(inputSearch).toBeInTheDocument();
    expect(orderByBtn).toBeInTheDocument();
    expect(filtersBtn).toBeInTheDocument();
  });

  it('should open order by options', async () => {
    await act(async () => {
      render(<UsersMenuMock {...mockProps} />);
    });

    const orderByBtn = screen.getByRole('button', { name: 'Ordenar por' });
    fireEvent.click(orderByBtn);
    const tabOpened = screen.getByTestId('order-by-tab-open');
    const radioButtons = screen.getAllByTestId('radio-button-order-by');

    expect(tabOpened).toBeInTheDocument();
    expect(radioButtons.length).toBe(sortByItems.length);
  });

  it('should open filter by options', async () => {
    await act(async () => {
      render(<UsersMenuMock {...mockProps} />);
    });

    const filterByBtn = screen.getByRole('button', { name: 'Filtrar por' });
    fireEvent.click(filterByBtn);
    const tabOpened = screen.getByTestId('filter-by-tab-open');

    expect(tabOpened).toBeInTheDocument();
  });
});
