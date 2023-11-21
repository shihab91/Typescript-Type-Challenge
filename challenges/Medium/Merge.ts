type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S
    ? S[P]
    : P extends keyof F
    ? F[P]
    : never
}

// alternative

// type Merge<F, S> = {
//   [P in keyof (F & S)]: P extends keyof S ? S[P] : (F & S)[P]
// }
