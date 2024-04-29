declare global {
    interface Array<T> {
        immerMap<R>(callbackfn: (value: T, index: number, array: readonly T[]) => R): R[];
    }
}
export {};
