import React from 'react';
import { StateProvider, useState, useDispatch } from './state';

// https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context
// https://svelte.dev/examples/hacker-news

const Counter = () => {
  const state = useState();
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(state => {
      state.count += 1;
    });
  };

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={increment}>add</button>
    </div>
  );
};

const Test = () => {
  // if you uncomment this line, console.log will run when you increment Counter
  // either way, this component will re-render according to React Dev Tools
  // you can fix it by wrapping only Counter in the StateProvider
  // const state = useState();
  console.log('Test component has rendered');

  return (
    <div>
      test component
    </div>
  );
}

export const App = () => (
  <React.StrictMode>
    <StateProvider>
      <main>
        <Counter />
        <Test />
      </main>
    </StateProvider>
  </React.StrictMode>
);