// type WhiteSpace = " " | "\n" | "\t"
// type Trim<S extends string> = S extends
//   | `${infer A}${WhiteSpace}`
//   | `${WhiteSpace}${infer A}`
//   ? Trim<A>
//   : S
