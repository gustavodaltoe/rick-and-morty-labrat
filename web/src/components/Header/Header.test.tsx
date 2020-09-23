import { render } from '@testing-library/react';

import React from 'react';
import Header from '.';

describe('Header', () => {
  test('render rick and morty image', () => {
    const { container } = render(<Header />);

    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'srcset',
      expect.stringContaining('rick_and_morty.png'),
    );
  });

  test('render app title', () => {
    const { container } = render(<Header />);

    const title = container.querySelector('h1');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('RICK AND MORTY');
  });
});
