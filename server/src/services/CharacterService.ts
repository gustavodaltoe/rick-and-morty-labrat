import axios from 'axios';
import { Character, CharacterDTO } from '../models/Character';

export default class CharacterService {
  private readonly GRAPHQL_API = 'https://rickandmortyapi.com/graphql/';

  private async getCharactersFromApi(planetId: number): Promise<Character[]> {
    try {
      const resp = await axios.post(this.GRAPHQL_API, {
        query: `
          query {
            location(id: ${planetId}) {
              name
              residents {
                name
                status
                gender
                image
                species
                episode {
                  name
                }
              }
            }
          }
        `,
      });

      const { data } = resp.data;
      const { residents } = data.location;

      return residents.map((resident: CharacterDTO) => new Character(resident));
    } catch (err) {
      throw new Error(
        'Application failed to fetch data from Rick and Morty API',
      );
    }
  }

  async getCharacters(
    planetId: number,
    species?: string,
  ): Promise<Character[]> {
    const characters = await this.getCharactersFromApi(planetId);
    if (species) {
      return characters.filter(
        (character: Character) =>
          character.species.toLowerCase() === species.toLowerCase(),
      );
    }
    return characters;
  }
}
