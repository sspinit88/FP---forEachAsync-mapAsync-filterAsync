import { mapAsync } from './map-async.ts';

const filterAsync = <T>(
  arr: T[],
  fn: (x: T) => Promise<boolean>
) =>
  mapAsync(arr, fn).then((arr2) =>
    arr.filter((v, i) => Boolean(arr2[i]))
  );

export { filterAsync };