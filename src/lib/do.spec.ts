import test from 'ava';
import * as E from 'fp-ts/Either';
import * as O from 'fp-ts/Option';
import * as RTE from 'fp-ts/ReaderTaskEither';

import { Do } from './do';

test('Option:', (t) => {
  const A = 'A';
  const two = 2;

  const result = Do(O.Monad)(function* ($) {
    const a = yield* $(O.some(A));
    const b = yield* $(O.some(two));
    return [a, b] as const;
  });

  t.deepEqual(result, O.some([A, two] as const));
});

test('Option: stop execution', (t) => {
  const two = 2;
  let executionStopped = true;

  const result = Do(O.Monad)(function* ($) {
    const a = yield* $(O.none);
    executionStopped = false;
    const b = yield* $(O.some(two));
    return [a, b] as const;
  });

  t.is(executionStopped, true);
  t.deepEqual(result, O.none);
});

test('Option: stop execution with first none', (t) => {
  const two = 2;
  let executionStopped1 = true;
  let executionStopped2 = true;

  const result = Do(O.Monad)(function* ($) {
    const a = yield* $(O.some(two));
    executionStopped1 = false;

    const b = yield* $(O.none);
    executionStopped2 = false;

    return [a, b] as const;
  });

  t.is(executionStopped1, false);
  t.is(executionStopped2, true);
  t.deepEqual(result, O.none);
});

test('Either:', (t) => {
  const A = 'A';
  const two = 2;

  const result = Do(E.Monad)(function* ($) {
    const a = yield* $(E.right(A));
    const b = yield* $(E.right(two));
    return [a, b] as const;
  });

  t.deepEqual(result, E.right([A, two] as const));
});

test('Either: stop execution', (t) => {
  const A = 'A';
  const two = 2;
  let executionStopped = true;

  const result = Do(E.Monad)(function* ($) {
    const a = yield* $(E.left(A));
    executionStopped = false;
    const b = yield* $(E.right(two));
    return [a, b] as const;
  });

  t.is(executionStopped, true);
  t.deepEqual(result, E.left(A));
});

test('Either: stop execution with first none', (t) => {
  const A = 'A';
  const two = 2;
  let executionStopped1 = true;
  let executionStopped2 = true;

  const result = Do(E.Monad)(function* ($) {
    const a = yield* $(E.right(A));
    executionStopped1 = false;

    const b = yield* $(E.left(two));
    executionStopped2 = false;

    return [a, b] as const;
  });

  t.is(executionStopped1, false);
  t.is(executionStopped2, true);
  t.deepEqual(result, E.left(two));
});

test('RTE:', async (t) => {
  const A = 'A';
  const two = 2;

  const testRTE = Do(RTE.Monad)(function* ($) {
    const env = yield* $(RTE.ask<{ readonly a: typeof A }>());
    const b = yield* $(RTE.right(two));
    return [env.a, b] as const;
  });

  const result = await testRTE({ a: A })();
  t.deepEqual(result, E.right([A, two] as const));
});

test('RTE: stop execution', async (t) => {
  const A = 'A';
  const two = 2;
  const f = false as const;
  let executionStopped = true;

  const testRTE = Do(RTE.Monad)(function* ($) {
    const env = yield* $(RTE.ask<{ readonly a: typeof A }>());
    const a = yield* $(RTE.left(f));
    executionStopped = false;
    const b = yield* $(RTE.right(two));
    return [env.a, a, b] as const;
  });

  const result = await testRTE({ a: A })();

  t.is(executionStopped, true);
  t.deepEqual(result, E.left(f));
});

test('RTE: stop execution with first none', async (t) => {
  const A = 'A';
  const two = 2;
  const f = false as const;
  let executionStopped1 = true;
  let executionStopped2 = true;

  const testRTE = Do(RTE.Monad)(function* ($) {
    const env = yield* $(RTE.ask<{ readonly a: typeof A }>());

    const a = yield* $(RTE.right(f));
    executionStopped1 = false;

    const b = yield* $(RTE.left(two));
    executionStopped2 = false;

    return [env.a, a, b] as const;
  });

  const result = await testRTE({ a: A })();

  t.is(executionStopped1, false);
  t.is(executionStopped2, true);
  t.deepEqual(result, E.left(two));
});
