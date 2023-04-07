import { expect, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';

import fakeList from '../src/assets/json/productsListTest.json';

expect.extend(matchers);

const globalFetch = global.fetch;

beforeAll(() => {
  global.fetch = vi.fn().mockImplementation((str: string) => {
    if (str === 'https://dummyjson.com/product/1') {
      return Promise.resolve({
        json: () => Promise.resolve(fakeList.products[0]),
      });
    }
    return Promise.resolve({
      json: () => Promise.resolve(fakeList),
    });
  });
});

afterAll(() => {
  cleanup();
  global.fetch = globalFetch;
});
