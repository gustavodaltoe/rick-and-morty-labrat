import { rest } from 'msw';

const handlers = [
  rest.get('http://localhost:3333/humans', (req, res, ctx) => {
    return res(
      ctx.json({
        info: {
          count: 1,
          location: 'Earth (C-137)',
          species: 'Human',
        },
        results: [
          {
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
          },
        ],
      }),
    );
  }),
];

export default handlers;
