import React, { useState } from 'react';

import { loadModels } from '../helpers/faceApi';
import { createFaLibrary } from '../helpers/icons';

import Camera from '../components/Camera';
import NavBar from '../components/NavBar';
loadModels();
export default function ActualBot() {
  const [mode, setMode] = useState(false); //true = photo mode; false = video mode

  return (
    <div className="thin">
      <header>
        <div className="App__header">
          <h1>
            <NavBar/>
          </h1>
        </div>
      </header>
      <Camera photoMode={mode} />
    </div>
  );
}