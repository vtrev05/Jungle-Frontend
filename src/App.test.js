import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

describe('Test for App', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<App />)
    expect(getByTestId('content')).toBeInTheDocument()
  })
})
