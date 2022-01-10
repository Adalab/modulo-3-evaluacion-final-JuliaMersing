import React from 'react';
import PageNotFound from "./PageNotFound";
import { render, toBeInTheDocument } from './../../utils/utilTest';


describe('<PageNotFound/>', () => {
    it('should render PageNotFound', async () => {
      const { getByTestId } = render(<PageNotFound/>);
      expect(getByTestId('notFoundPage')).toBeInTheDocument();
    });
});

