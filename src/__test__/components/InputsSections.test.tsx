import { InputsSection, InputsSectionProps } from '@/components/LoginPage';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

let mockProps: InputsSectionProps;

const InputsSectionMock = (props: InputsSectionProps) => {
  return <InputsSection {...props} />;
};

describe('InputsSection', () => {
  beforeEach(() => {
    mockProps = {
      emailValue: 'test@gmail.com',
      errors: { email: false, password: false },
      handleEmail: () => {},
      handleClick: () => {},
      handlePassword: () => {},
      passwordValue: '123456',
      showPassword: false,
    };
  });

  it('should render component with email and password value', async () => {
    render(<InputsSectionMock {...mockProps} />);

    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    const passwordInput = screen.getByRole('textbox', { name: 'Senha' });

    expect(emailInput).toHaveValue(mockProps.emailValue);
    expect(passwordInput).toHaveValue(mockProps.passwordValue);
  });

  it('should render password input with icon for toggle visibility', () => {
    render(<InputsSectionMock {...mockProps} />);

    const togglePassword = screen.getByRole('button', { name: 'toggle password visibility' });

    expect(togglePassword).toBeInTheDocument();
  });

  it('should hide password', () => {
    render(<InputsSectionMock {...mockProps} />);

    const passwordInput = screen.getByRole('textbox', { name: 'Senha' });
    const togglePassword = screen.getByRole('button', { name: 'toggle password visibility' });

    waitFor(() => {
      fireEvent.click(togglePassword);
      const passwordValue = passwordInput.getAttribute('value');

      expect(passwordValue).toContain('*');
    });
  });
});
