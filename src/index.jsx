import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './context-example';
// import { App } from './jotai-example';
// import { App } from './zustand-example';
// import { App } from './vyce-example';
import { App } from './signals-example';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);