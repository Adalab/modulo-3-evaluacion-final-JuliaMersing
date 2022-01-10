import React from 'react';
import { render, screen, userEvent } from './../../utils/utilTest';
import ResetButton from '../services/ResetButtom';
import CharactersList from '../components/Characters/CharactersList';


test('click', () => {
    const RenderButton = () => {
        render(
            <div>
              <CharactersList/>
            </div>,
          )
    }
 

  userEvent.click(screen.getByText('Click'))
  expect(screen.getByLabelText('Click')).toBeClicked()
})
