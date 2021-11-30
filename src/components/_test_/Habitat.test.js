import React from 'react';
import {render} from '@testing-library/react';
import Habitat from '../../pages/Habitat';

describe('Test for Habitat', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Habitat />)
    expect(getByTestId('habitatrender')).toBeInTheDocument()
  })
})

describe('Habitat', () => {
    it('passing test', () => {
        expect(true).toBeTruthy();
      })
     
      it('failing test', () => {
        expect(false).toBeFalsy();
      })
})