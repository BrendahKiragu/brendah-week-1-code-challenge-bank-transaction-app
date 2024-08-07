import { render, screen } from '@testing-library/react';
import App from './components/App';

test('My Transactions Manager App', () => {
  render(<App />);
  const linkElement = screen.getByText("My Transactions Manager App");
  expect(linkElement).toBeInTheDocument();
});
