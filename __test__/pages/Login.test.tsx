import '@testing-library/jest-dom';
import Login from '@/app/login/page';
import { render, screen } from '@testing-library/react';
import { ThemeContextProvider, UsersProviderProvider } from '@/hooks';
import { usersMock } from '../mock/usersMock';
import MockAdapter from 'axios-mock-adapter';
import { api } from '@/services/api';
import { act } from 'react-dom/test-utils';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const LoginMock = () => (
  <ThemeContextProvider>
    <UsersProviderProvider>
      <Login />
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
      render(<LoginMock />);
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it('should render page title and subtitle', async () => {
    const title = screen.getByRole('heading', { name: 'Bem-vindo(a)' });
    const subtitle = screen.getByRole('heading', {
      name: 'Acesse sua conta para iniciar a sessão',
    });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('should render login inputs', async () => {
    const loginInputs = screen.getAllByRole('textbox');

    expect(loginInputs).toHaveLength(2);
    loginInputs.forEach((input) => expect(input).toBeInTheDocument());
  });

  it('should render theme button', async () => {
    const themeButton = screen.getByRole('button', { name: `${'light' || 'dark'}` });
    expect(themeButton).toBeInTheDocument();
  });

  it('should render buttons', async () => {
    const forgotPasswordButton = screen.getByRole('heading', { name: 'Esqueceu sua senha?' });
    const accessPlatformButton = screen.getByRole('button', { name: 'platform-access' });

    expect(forgotPasswordButton).toBeInTheDocument();
    expect(accessPlatformButton).toBeInTheDocument();
  });
});
