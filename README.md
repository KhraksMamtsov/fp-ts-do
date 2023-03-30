# fp-ts-do

Do-notation implemented with generators for fp-ts ecosystem.
Resume function `$` works like `pipe` - it useful for handling not targeted monad parameters:
For example - mapping errors in-place in Either

```typescript
import * as E from 'fp-ts/Either'
import * as RTE from 'fp-ts/ReaderTaskEither'

Do(E.Monad)(function* ($) {
  const a = yield* $( // $ === pipe
    MyEitherNumber, // Either<0, 1> 
    E.mapLeft(() => -1)
  ); // Either<-1, 1>
  const b = yield* $(MyEitherString); // Either<'L', 'R'>
  return [a, b];
}); // Either<-1 | 'L', [1, 'R']>

Do(RTE.Monad)(function* ($) { 
  const a = yield* $(MyRTENumber); // RTE<{n: number}, 0, 1>
  const b = yield* $(MyRTEString); // RTE<{s: string}, 'L', 'R'>
  return [a, b];
}); // Either<{n: number;} & {s: string;}, 0 | 'L', [1, 'R']>
```
