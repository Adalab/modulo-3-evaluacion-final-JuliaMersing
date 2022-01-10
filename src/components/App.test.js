import React from 'react';
import { render } from '../utils/utilTest';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});