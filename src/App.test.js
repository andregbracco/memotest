import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title Memotest', () => {
  //When
  render(<App />);

  // Then
  const linkElement = screen.getByText(/MEMOTEST/i);

  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  //When
  render(<App />);

  // Then
  const linkElement = screen.getByText(/MEMOTEST/i);

  expect(linkElement).toBeInTheDocument();
});
