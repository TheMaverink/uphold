import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyDropdown from './index';

test('renders dropdown and selects a currency', () => {
  const onChange = jest.fn();
  render(<CurrencyDropdown value="USD" onChange={onChange} />);

  const dropdown = screen.getByText('USD');
  expect(dropdown).toBeInTheDocument();

  fireEvent.click(dropdown);
  const euroOption = screen.getByText('EUR');
  fireEvent.click(euroOption);

  expect(onChange).toHaveBeenCalledWith('EUR');
});
