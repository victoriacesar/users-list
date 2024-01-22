import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeContextProvider, UsersProviderProvider } from '@/hooks';
import { act } from 'react-dom/test-utils';
import Users from '@/app/users/page';

const UsersMock = () => (
  <ThemeContextProvider>
    <UsersProviderProvider>
      <Users />
    </UsersProviderProvider>
  </ThemeContextProvider>
);

describe('LoginPage', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<UsersMock />);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render page title', async () => {
    const title = screen.getByRole('heading', { name: 'Usuários' });

    expect(title).toBeInTheDocument();
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
});
