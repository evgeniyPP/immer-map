import { produce } from 'immer';

declare global {
  interface Array<T> {
    immerMap<R>(callbackfn: (value: T, index: number, array: readonly T[]) => R): R[];
  }
}

Array.prototype.immerMap = function <T, R>(
  callbackfn: (value: T, index: number, array: readonly T[]) => R
): R[] {
  return produce(this, draft => {
    for (let i = 0; i < draft.length; i++) {
      draft[i] = callbackfn(draft[i], i, draft);
    }
  });
};
