import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from '.';

describe('<CharacterItem />', () => {
  const human = {
    name: 'Beth Smith',
    status: 'Alive',
    gender: 'Female',
    image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
    episodes: [
      'Pilot',
      'Lawnmower Dog',
      'Anatomy Park',
      'M. Night Shaym-Aliens!',
      'Meeseeks and Destroy',
      'Rick Potion #9',
      'The Rickshank Rickdemption',
    ],
  };

  it('Should render info', () => {
    const { getByText, getByAltText } = render(
      <CharacterItem character={human} />,
    );

    const name = getByText(human.name);
    const status = getByText(human.status);
    const gender = getByText(human.gender);
    const image = getByAltText(human.name);
    const episodes = getByText(human.episodes[0]);

    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('srcset')).toBe(human.image);
    expect(episodes).toBeInTheDocument();
  });
});
