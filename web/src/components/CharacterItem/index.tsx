import React from 'react';

import { FaMale, FaFemale, FaDizzy, FaMeh } from 'react-icons/fa';

import './styles.scss';

export interface Character {
  name: string;
  status: string;
  gender: string;
  image: string;
  episodes: Array<string>;
}

interface CharacterItemProps {
  character: Character;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const { name, status, gender, image, episodes } = character;
  return (
    <article className="character-item">
      <img srcSet={image} alt={name} />
      {status === 'Dead' && <FaDizzy className="dead" />}
      {gender === 'Male' ? (
        <FaMale className="gender" />
      ) : (
        <FaFemale className="gender" />
      )}
      <div className={status.toLowerCase()}>
        <div className="info">
          <strong>{name}</strong>
          <p>
            <span>
              {gender === 'Male' ? <FaMale /> : <FaFemale />} {gender}
            </span>
            <span>
              {status === 'Dead' ? <FaDizzy /> : <FaMeh />} {status}
            </span>
          </p>
          <div className="episodes">
            <strong>Episodes</strong>
            <ul>
              {episodes.map((episode) => (
                <li key={episode}>{episode}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CharacterItem;
