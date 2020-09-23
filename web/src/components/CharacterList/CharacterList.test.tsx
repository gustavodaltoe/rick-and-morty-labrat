import React from 'react';
import { render, waitFor, findByText, screen } from '@testing-library/react';

import { rest } from 'msw';
import CharacterList from '.';
import server from '../../mocks/server';

describe('<CharacterList />', () => {
  it('Renders <Loader />', () => {
    const { container } = render(<CharacterList />);
    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });

  it('Removes <Loader />', async () => {
    const { container } = render(<CharacterList />);
    const loader = container.querySelector('.loader');
    await waitFor(() => expect(loader).not.toBeInTheDocument());
  });

  it('Handles server error', async () => {
    server.use(
      rest.get('http://localhost:3333/humans', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    render(<CharacterList />);

    expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
  });

  it('Loads and renders <CharacterItem />', async () => {
    const { container } = render(<CharacterList />);
    expect(await findByText(container, 'Beth Smith')).toBeInTheDocument();
  });
});
