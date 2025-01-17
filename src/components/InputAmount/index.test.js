import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import InputAmount from '../InputAmount';

describe('InputAmount Component', () => {
  test('renders input field with placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputAmount value={''} setValue={jest.fn()} />
    );
    expect(getByPlaceholderText('0.00')).toBeInTheDocument();
  });

  test('updates input value and formats number correctly', async () => {
    const setValueMock = jest.fn();
    const { getByRole } = render(
      <InputAmount value={''} setValue={setValueMock} />
    );

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: '1234567.89' } });

    await waitFor(() => {
      expect(input.value).toBe('1,234,567.89');
    });
  });

  test('prevents leading zeros and invalid characters', async () => {
    const setValueMock = jest.fn();
    const { getByRole } = render(
      <InputAmount value={''} setValue={setValueMock} />
    );

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: '000123abc' } });

    await waitFor(() => {
      expect(input.value).toBe('123');
    });
  });
});
