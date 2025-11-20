import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css'; // Assuming we will create/move CSS or import Tailwind here

const container = document.querySelector('#root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
