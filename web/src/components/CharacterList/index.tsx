import React, { useState, useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import Loader from '../Loader';
import api from '../../services/api';

import './styles.scss';
import CharacterItem, { Character } from '../CharacterItem';

function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [humans, setHumans] = useState<Character[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    api
      .getHumans()
      .then(({ data }) => {
        if (mounted) {
          setHumans(data.results);
        }
      })
      .catch(() => {
        if (mounted) {
          setError(true);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <Loader dataTestId="character-list" />;
  }

  return (
    <section
      id="character-list"
      className="container"
      data-testid="character-list"
    >
      {error ?
        (<div className="error">
          <FiAlertCircle />
          <strong>Something went wrong</strong>
          <p>Failed to get data from server, try again later.</p>
        </div>) : 
      <h1>Humans from Earth (C-137)</h1>}
      {humans.map((human: Character) => (
        <CharacterItem character={human} key={human.name} />
      ))}
    </section>
  );
}

export default CharacterList;
