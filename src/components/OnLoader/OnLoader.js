import React from 'react';
import Loader from 'react-loader-spinner';

import s from './OnLoader.module.css';

const OnLoader = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      className={s.OnLoader}
    />
  );
};

export default OnLoader;
