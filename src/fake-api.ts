const fakeAPI = <T>(delay: number, value: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), delay));

const useResult = (x: any): void => console.log(new Date(), x);

export { fakeAPI, useResult };
