import { Kind2 } from 'fp-ts/HKT';
import { URIS2 } from 'fp-ts/lib/HKT';

export interface Resume2<_F extends URIS2> {
  <_E, _A>(s: Kind2<_F, _E, _A>): Generator<Kind2<_F, _E, _A>, _A>;
  <A, _E, _A>(a: A, ab: (a: A) => Kind2<_F, _E, _A>): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, _E, _A>(a: A, ab: (a: A) => B, bc: (b: B) => Kind2<_F, _E, _A>): Generator<
    Kind2<_F, _E, _A>,
    _A
  >;
  <A, B, C, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, _E, _A>(
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
    jk: (j: J) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, _E, _A>(
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
    kl: (k: K) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, _E, _A>(
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
    lm: (l: L) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, _E, _A>(
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
    mn: (m: M) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, _E, _A>(
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
    no: (n: N) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, _E, _A>(
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
    op: (o: O) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, _E, _A>(
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
    pq: (p: P) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, _E, _A>(
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
    qr: (q: Q) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, _E, _A>(
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
    rs: (r: R) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, _E, _A>(
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
    st: (s: S) => Kind2<_F, _E, _A>
  ): Generator<Kind2<_F, _E, _A>, _A>;
}
