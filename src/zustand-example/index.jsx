import React from 'react';
import { useStore } from './state';

const Counter = () => {
  const store = useStore();

  const increment = () => {
    store.setState((state) => {
      state.count += 1;
    })
  };

  return (
    <div>
      <p>Counter: {store.count}</p>
      <button onClick={increment}>add</button>
    </div>
  );
};

const Test = () => {
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