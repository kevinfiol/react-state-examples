import { atom, useAtom } from 'jotai';
import produce from 'immer';

const initialState = {
  count: 10
};

export const stateAtom = atom(initialState);

export function useStateAtom() {
  const [state, _setState] = useAtom(stateAtom);
  const setState = (recipe) => _setState(produce(state, recipe));

  return [state, setState];
}