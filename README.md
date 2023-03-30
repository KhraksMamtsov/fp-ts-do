# fp-ts-do

Do-notation implemented with generators for fp-ts ecosystem.

```typescript
import * as E from 'fp-ts/Either'
import * as RTE from 'fp-ts/ReaderTaskEither'

Do(E.Monad)(function* ($) {
  const a = yield* $(MyEitherNumber); // Either<0, 1>
  const b = yield* $(MyEitherString); // Either<'L', 'R'>
  return [a, b];
}); // Either<0 | 'L', [1, 'R']>

Do(RTE.Monad)(function* ($) { 
  const a = yield* $(MyRTENumber); // RTE<{n: number}, 0, 1>
  const b = yield* $(MyRTEString); // RTE<{s: string}, 'L', 'R'>
  return [a, b];
}); // Either<{n: number;} & {s: string;}, 0 | 'L', [1, 'R']>
```
