// https://preactjs.com/blog/introducing-signals/
import { signal } from "@preact/signals-react";
import produce from 'immer';

const initialState = {
  count: 10
};

export const appState = signal(initialState);

export function useAppState() {
  
}