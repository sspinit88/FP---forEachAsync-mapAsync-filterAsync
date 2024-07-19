import './style.css';
import { fakeAPI, useResult } from './fake-api.ts';
import { forEachAsync } from './for-each-async.ts';
import { mapAsync } from './map-async.ts';
import { filterAsync } from './filter-async.ts';

//// forEachAsync
/*
(async () => {
  console.log('START FOREACH VIA REDUCE');
  await forEachAsync([1, 2, 3, 4], async (n) => {
    const x = await fakeAPI(n * 1000, n);
    useResult(x);
  });
  console.log('END FOREACH VIA REDUCE');
})();
*/

/// mapAsync
/*
(async () => {
  console.log('START MAP');
  const mapped = await mapAsync([1, 2, 3, 4], async (n) => {
    const x = await fakeAPI(n * 1000, n);
    return x * 10;
  });
  useResult(mapped);
  console.log('END MAP');
})();
*/

/// filterAsync

const fakeFilter = (value: number): Promise<boolean> =>
  new Promise((resolve) => setTimeout(() => resolve(value % 2 === 0), 1000));

(async () => {
  console.log('START FILTER');

  const filtered = await filterAsync([1, 2, 3, 4], async (n) => {
    const x = await fakeFilter(n);
    return x;
  });

  useResult(filtered);

  console.log('END FILTER');
})();
