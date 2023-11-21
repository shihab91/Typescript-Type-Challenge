type Flatten<T> = T extends []
  ? []
  : T extends [infer Head, ...infer Tail]
  ? Head extends unknown[]
    ? Flatten<[...Head, ...Tail]>
    : [Head, ...Flatten<Tail>]
  : T

// alternative

// type Flatten<T> = T extends []
//   ? []
//   : T extends [infer Head, ...infer Tail]
//   ? [...Flatten<Head>, ...Flatten<Tail>]
//   : [T]
