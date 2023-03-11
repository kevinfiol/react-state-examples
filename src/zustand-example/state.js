import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';

const initialState = {
  count: 10
};

export const useStore = create(devtools((set) => ({
  ...initialState,
  setState: (recipe) => {
    set((state) => {
      return produce(state, recipe);
    });
  }
})));