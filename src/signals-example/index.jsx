import React from 'react';
import { appState } from './state';

const Counter = () => {
  const increment = () => {
    appState.value = { ...appState.value, count: 11 };
  };

  return (
    <div>
      <p>Counter: {appState.value.count}</p>
      <button onClick={increment}>add</button>
    </div>
  );
};

const Test = () => {
  // const [] = useStateAtom();
  console.log('Test component has rendered');

  return (
    <div>
      test component
    </div>
  );
};

export const App = () => (
  <React.StrictMode>
    <main>
      <Counter />
      <Test />
    </main>
  </React.StrictMode>
);