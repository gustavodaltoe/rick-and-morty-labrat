import { render } from '@testing-library/react';

import React from 'react';
import App from './App';

describe('App', () => {
  beforeEach(() => {});

  test('Renders <Header />', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#page-header')).toBeInTheDocument();
  });

  test('Renders <CharacterList />', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('character-list')).toBeInTheDocument();
  });
});
