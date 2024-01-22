import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeContextProvider, UsersProviderProvider } from '@/hooks';
import { act } from 'react-dom/test-utils';
import Users from '@/app/users/page';
import MockAdapter from 'axios-mock-adapter';
import { api } from '@/services/api';
import { usersMock } from '../mock/usersMock';

jest.mock('../../hooks', () => {
  const originalModule = jest.requireActual('../../hooks');
  return {
    ...originalModule,
    useUsers: jest.fn(() => ({
      usersData: usersMock,
      isLoading: false,
    })),
  };
});

const UsersMock = () => (
  <ThemeContextProvider>
    <UsersProviderProvider>
      <Users />
    </UsersProviderProvider>
  </ThemeContextProvider>
);

describe('LoginPage', () => {
  let mock: InstanceType<typeof MockAdapter>;

  beforeAll(() => {
    mock = new MockAdapter(api);
    mock.onGet(`/users`).reply(200, usersMock);
  });

  beforeEach(async () => {
    await act(async () => {
      render(<UsersMock />);
    });
  });

  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });

  it('should render avatar', async () => {
    const avatarComponent = screen.getByTestId('avatar');

    expect(avatarComponent).toBeInTheDocument();
  });

  it('should render avatar', async () => {
    const pagination = screen.getByTestId('pagination-component');

    expect(pagination).toBeInTheDocument();
  });

  it('should render input search', async () => {
    const inputSearch = screen.getByPlaceholderText('Pesquisar ID ou nome ou telefone...');

    expect(inputSearch).toBeInTheDocument();
  });

  it('should render buttons to order data', async () => {
    const orderButton = screen.getByRole('button', { name: 'Ordenar por' });
    const filterButton = screen.getByRole('button', { name: 'Filtrar por' });

    expect(orderButton).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
  });

  it('should render users table', async () => {
    const usersTable = screen.getByTestId('sticky-table');

    expect(usersTable).toBeInTheDocument();
  });

  it('should render pagination component', async () => {
    const pagination = screen.getByTestId('pagination-component');

    expect(pagination).toBeInTheDocument();
  });
});
