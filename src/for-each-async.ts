const forEachAsync = <T>(arr: T[], fn: (x: T) => any): Promise<any> =>
  arr.reduce(
    (promise: Promise<void>, value: T) => promise.then(() => fn(value)),
    Promise.resolve()
  );

export { forEachAsync };
