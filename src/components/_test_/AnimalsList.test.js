import React from 'react';
import {render} from '@testing-library/react';
import AnimalsList from '../../pages/AnimalsList';

describe('Test for animalsList', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<AnimalsList />)
    expect(getByTestId('animalsList')).toBeInTheDocument()
  })
})

describe('AnimalsList', () => {
    it('passing test', () => {
        expect(true).toBeTruthy();
      })
     
      it('failing test', () => {
        expect(false).toBeFalsy();
      })
})