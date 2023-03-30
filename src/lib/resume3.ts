import { Kind3 } from 'fp-ts/HKT';
import { URIS3 } from 'fp-ts/lib/HKT';

export interface Resume3<_F extends URIS3> {
  <_R, _E, _A>(a: Kind3<_F, _R, _E, _A>): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, _R, _E, _A>(a: A, ab: (a: A) => Kind3<_F, _R, _E, _A>): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, _R, _E, _A>(a: A, ab: (a: A) => B, bc: (b: B) => Kind3<_F, _R, _E, _A>): Generator<
    Kind3<_F, _R, _E, _A>,
    _A
  >;
  <A, B, C, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, _R, _E, _A>(
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
    jk: (j: J) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, _R, _E, _A>(
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
    kl: (k: K) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, _R, _E, _A>(
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
    lm: (l: L) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, _R, _E, _A>(
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
    mn: (m: M) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, _R, _E, _A>(
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
    no: (n: N) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, _R, _E, _A>(
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
    op: (o: O) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, _R, _E, _A>(
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
    pq: (p: P) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, _R, _E, _A>(
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
    qr: (q: Q) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, _R, _E, _A>(
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
    rs: (r: R) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, _R, _E, _A>(
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
    st: (s: S) => Kind3<_F, _R, _E, _A>
  ): Generator<Kind3<_F, _R, _E, _A>, _A>;
}
