const mapAsync = <T, R>(arr: T[], fn: (x: T) => Promise<R>) =>
  Promise.all(arr.map(fn));

export { mapAsync };
