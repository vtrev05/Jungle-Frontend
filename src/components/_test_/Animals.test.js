import React from 'react';
import {render} from '@testing-library/react';
import Animals from '../../pages/Animals';

describe('Test for animalsFilters', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Animals />)
    expect(getByTestId('animalsFilters')).toBeInTheDocument()
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