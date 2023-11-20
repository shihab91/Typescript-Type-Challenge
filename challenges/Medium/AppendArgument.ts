type AppendArgument<T extends (...args: any[]) => unknown, A> = T extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, A]) => R
  : T

// alternative
// type AppendArgument<Fn extends (...args: any[]) => unknown, A> = (
//   ...args: [...Parameters<Fn>, A]
// ) => ReturnType<Fn>
