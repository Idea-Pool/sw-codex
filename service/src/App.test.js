import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/Home/i);
  for (const linkElement of linkElements) {
    expect(linkElement).toBeInTheDocument();
  }
});
