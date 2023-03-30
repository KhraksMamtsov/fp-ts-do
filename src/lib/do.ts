import { pipe } from 'fp-ts/function';
import { HKT, Kind, Kind2, Kind3, Kind4, URIS, URIS2, URIS3, URIS4 } from 'fp-ts/lib/HKT';
import { Monad, Monad1, Monad2, Monad3, Monad4 } from 'fp-ts/lib/Monad';

import { Resume1 } from './resume1';
import { Resume2 } from './resume2';
import { Resume3 } from './resume3';
import { Resume4 } from './resume4';

function identityGen<F extends URIS, A>(
  a: A,
  ab: (a: A) => Kind<F, any>
): Generator<Kind<F, any>, Kind<F, any>, Kind<F, any>>;
function identityGen<F extends URIS>(
  a: Kind<F, any>
): Generator<Kind<F, any>, Kind<F, any>, Kind<F, any>>;
function* identityGen<F extends URIS>(
  ...args: readonly [unknown, ...(readonly Function[])]
): Generator<Kind<F, any>, Kind<F, any>, Kind<F, any>> {
  return yield pipe(...(args as readonly [any]));
}

export function Do<_F extends URIS4>(
  M: Monad4<_F>
): <MA, K extends Kind4<_F, any, any, any, any>>(
  context: (resume: Resume4<_F>) => Generator<K, MA>
) => Kind4<
  _F,
  readonly [K] extends readonly [never]
    ? never
    : readonly [K] extends readonly [Kind4<_F, infer S, any, any, any>]
    ? S
    : never,
  readonly [K] extends readonly [never]
    ? never
    : readonly [K] extends readonly [Kind4<_F, any, infer R, any, any>]
    ? R
    : never,
  readonly [K] extends readonly [never]
    ? never
    : readonly [K] extends readonly [Kind4<_F, any, any, infer E, any>]
    ? E
    : never,
  MA
>;
export function Do<_F extends URIS3>(
  M: Monad3<_F>
): <MA, K extends Kind3<_F, any, any, any>>(
  context: (resume: Resume3<_F>) => Generator<K, MA>
) => Kind3<
  _F,
  readonly [K] extends readonly [never]
    ? never
    : readonly [K] extends readonly [Kind3<_F, infer R, any, any>]
    ? R
    : never,
  readonly [K] extends readonly [never]
    ? never
    : readonly [K] extends readonly [Kind3<_F, any, infer E, any>]
    ? E
    : never,
  MA
>;
export function Do<_F extends URIS2>(
  M: Monad2<_F>
): <MA, K extends Kind2<_F, any, any>>(
  f: (resume: Resume2<_F>) => Generator<K, MA>
) => Kind2<
  _F,
  readonly [K] extends readonly [never]
    ? never
    : readonly [K] extends readonly [Kind2<_F, infer E, any>]
    ? E
    : never,
  MA
>;
export function Do<_F extends URIS>(
  M: Monad1<_F>
): <MA>(context: (resume: Resume1<_F>) => Generator<Kind<_F, any>, MA>) => Kind<_F, MA>;
export function Do<F extends URIS>(M: Monad<F>) {
  return function <MA>(
    context: (resume: {
      <A>(s: HKT<F, A>): Generator<HKT<F, A>, HKT<F, A>, HKT<F, A>>;
      <A, T>(a: A, ab: (a: A) => HKT<F, T>): Generator<HKT<F, T>, HKT<F, T>, HKT<F, T>>;
    }) => Generator<HKT<F, any>, MA>
  ): HKT<F, MA> {
    const iterator = context(identityGen);
    const firstStep = iterator.next();
    function run(step: IteratorResult<HKT<F, any>, MA>): HKT<F, MA> {
      return step.done === true
        ? M.of(step.value)
        : M.chain(step.value, (x) => run(iterator.next(x)));
    }
    return run(firstStep);
  };
}
