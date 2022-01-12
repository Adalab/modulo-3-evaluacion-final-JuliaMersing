import React from 'react';
import { render} from '../utils/utilTest';
import ResetButton from './ResetButton';
import {BrowserRouter} from "react-router-dom";


describe('Reset Button', ()=> {
it('click',async () => {
  const handleClick = jest.fn()   
  const {getByTitle} = render( 
      <BrowserRouter>
         <ResetButton handleReset={handleClick} />
      </BrowserRouter>
    )
    const resetButton = getByTitle('resetButton')
    resetButton.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  });
});