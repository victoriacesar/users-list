import { UsersTable, UsersTableProps } from '@/components/UsersPage/UsersTable';
import { ThemeContextProvider, UsersProviderProvider } from '@/hooks';
import { api } from '@/services/api';
import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { usersMock } from '../mock/usersMock';
import { act } from 'react-dom/test-utils';

let mockProps: UsersTableProps;

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

const UsersTableMock = (props: UsersTableProps) => {
  return (
    <ThemeContextProvider>
      <UsersProviderProvider>
        <UsersTable {...mockProps} {...props} />
      </UsersProviderProvider>
    </ThemeContextProvider>
  );
};

describe('UsersTable', () => {
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
      sortBy: '',
    };
  });

  afterEach(() => {
    mock.restore();
    jest.clearAllMocks();
  });

  it('should render component', async () => {
    await act(async () => {
      render(<UsersTableMock {...mockProps} />);
    });

    const usersTable = screen.getByTestId('sticky-table');
    const rows = screen.getAllByTestId('table-row');

    expect(usersTable).toBeInTheDocument();
    expect(rows[0].textContent).toContain(String(usersMock[0].id));
    expect(rows[0].textContent).toContain(usersMock[0].name);
    expect(rows[0].textContent).toContain(usersMock[0].phone);
    expect(rows[0].textContent).toContain(usersMock[0].status);
  });
});
