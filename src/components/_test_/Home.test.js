import React from 'react';
import {render} from '@testing-library/react';
import Home from '../../pages/Home';

describe('Test for Home', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Home />)
    expect(getByTestId('Homerender')).toBeInTheDocument()
  })
})


describe('Home', () => {
    it('passing test', () => {
        expect(true).toBeTruthy();
      })
     
      it('failing test', () => {
        expect(false).toBeFalsy();
      })
})