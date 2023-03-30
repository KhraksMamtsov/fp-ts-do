import { Kind } from 'fp-ts/HKT';
import { URIS } from 'fp-ts/lib/HKT';

export interface Resume1<_F extends URIS> {
  <_A>(s: Kind<_F, _A>): Generator<Kind<_F, _A>, _A>;
  <A, _A>(a: A, ab: (a: A) => Kind<_F, _A>): Generator<Kind<_F, _A>, _A>;
  <A, B, _A>(a: A, ab: (a: A) => B, bc: (b: B) => Kind<_F, _A>): Generator<Kind<_F, _A>, _A>;
  <A, B, C, _A>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => Kind<_F, _A>): Generator<
    Kind<_F, _A>,
    _A
  >;
  <A, B, C, D, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => S,
    st: (s: S) => Kind<_F, _A>
  ): Generator<Kind<_F, _A>, _A>;
}
