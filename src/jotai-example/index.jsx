import React from 'react';
import { useStateAtom } from './state';

const Counter = () => {
  const [state, setState] = useStateAtom();

  const increment = () => {
    setState(state => { state.count += 1 });
  };

  return (
    <div>
      <p>Counter: {state.count}</p>
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