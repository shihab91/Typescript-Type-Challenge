type Diff<L, R> = {
  [P in keyof (L & R) as Exclude<P, keyof L & keyof R>]: P extends keyof L
    ? L[P]
    : P extends keyof R
    ? R[P]
    : never
}
