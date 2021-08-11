import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FirstComp from './FirstComp';

describe('<FirstComp />', () => {
  test('it should mount', () => {
    render(<FirstComp />);
    
    const firstComp = screen.getByTestId('FirstComp');

    expect(firstComp).toBeInTheDocument();
  });
});