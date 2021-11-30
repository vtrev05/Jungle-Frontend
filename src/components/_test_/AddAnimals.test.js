import React from 'react';
import {render} from '@testing-library/react';
import AddAnimals from '../../pages/AddAnimals';

describe('Test for AddAnimals', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<AddAnimals />)
    expect(getByTestId('added')).toBeInTheDocument()
  })
})

describe('Animals', () => {
  it('passing test', () => {
      expect(true).toBeTruthy();
    })
   
    it('failing test', () => {
      expect(false).toBeFalsy();
    })
})