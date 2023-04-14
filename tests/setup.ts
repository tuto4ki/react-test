import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

import { server } from './mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => {
  cleanup();
  server.close();
});
