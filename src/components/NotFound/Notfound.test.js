import React from 'react';
import { render, toBeInTheDocument } from './../../utils/utilTest';
import NotFound from './NotFound'
// Por qué se queda sombreado?? No obstante, funciona

describe('<NotFound />', () => {
    it('should render NotFound', async () => {
      const { getByTestId } = render(<NotFound />);
      expect(getByTestId('characterNotFound')).toBeInTheDocument();
    });
});

