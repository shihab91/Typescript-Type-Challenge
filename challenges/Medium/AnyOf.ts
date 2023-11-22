type Falsy =
  | 0
  | ""
  | []
  | { [Key: string]: never }
  | false
  | null
  | undefined
  | 0n
type AnyOf<T extends readonly any[]> = T extends [infer Head, ...infer Tail]
  ? Head extends Falsy
    ? AnyOf<Tail>
    : true
  : false
// alternative
// type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true
