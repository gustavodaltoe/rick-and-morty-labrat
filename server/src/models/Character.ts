import Episode from './Episode';

export interface CharacterDTO {
  name: string;
  status: string;
  gender: string;
  image: string;
  episode: Episode[];
  species: string;
}

export class Character {
  name: string;

  status: string;

  gender: string;

  image: string;

  species: string;

  episodes: string[];

  constructor(character: CharacterDTO) {
    this.name = character.name;
    this.status = character.status;
    this.gender = character.gender;
    this.image = character.image;
    this.species = character.species;
    this.episodes = character.episode.map(ep => ep.name);
  }
}
