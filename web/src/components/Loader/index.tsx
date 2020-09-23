import React from 'react';
import svg from '../../assets/loader.svg';

import './styles.scss';

interface LoaderProps {
  dataTestId?: string;
}

const Loader: React.FC<LoaderProps> = ({ dataTestId }) => {
  return (
    <div className="loader" data-testid={dataTestId}>
      <img srcSet={svg} alt="loading" />
      <p>Searching humans from planet Earth (C-137)...</p>
    </div>
  );
};

export default Loader;
