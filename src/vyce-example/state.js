import { useState, useEffect, useRef } from 'react';
import { store } from 'vyce';
import produce from 'immer';

const initialState = {
  count: 10
};

export const appState = store(initialState);

export function useStore($store) {
  const [state, _setState] = useState($store());
  const setState = useRef(recipe => $store(prev => produce(prev, recipe)));

  useEffect(() => {
    $store.sub(v => _setState(v), false);
  }, []);

  return [state, setState.current];
}

export function useAppState() {
  return useStore(appState);
}