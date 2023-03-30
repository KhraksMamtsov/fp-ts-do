import { Kind4 } from 'fp-ts/HKT';
import { URIS4 } from 'fp-ts/lib/HKT';

export interface Resume4<_F extends URIS4> {
  <_S, _R, _E, _A>(a: Kind4<_F, _S, _R, _E, _A>): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, _S, _R, _E, _A>(a: A, ab: (a: A) => Kind4<_F, _S, _R, _E, _A>): Generator<
    Kind4<_F, _S, _R, _E, _A>,
    _A
  >;
  <A, B, _S, _R, _E, _A>(a: A, ab: (a: A) => B, bc: (b: B) => Kind4<_F, _S, _R, _E, _A>): Generator<
    Kind4<_F, _S, _R, _E, _A>,
    _A
  >;
  <A, B, C, _S, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, _S, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, _S, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, _S, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, _S, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, _S, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, _S, _R, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, _S, _R, _E, _A>(
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
    jk: (j: J) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, _S, _R, _E, _A>(
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
    kl: (k: K) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, _S, _R, _E, _A>(
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
    lm: (l: L) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, _S, _R, _E, _A>(
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
    mn: (m: M) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, _S, _R, _E, _A>(
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
    no: (n: N) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, _S, _R, _E, _A>(
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
    op: (o: O) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, _S, _R, _E, _A>(
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
    pq: (p: P) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, _S, _R, _E, _A>(
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
    qr: (q: Q) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, _S, _R, _E, _A>(
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
    rs: (r: R) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, _S, _R, _E, _A>(
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
    st: (s: S) => Kind4<_F, _S, _R, _E, _A>
  ): Generator<Kind4<_F, _S, _R, _E, _A>, _A>;
}
