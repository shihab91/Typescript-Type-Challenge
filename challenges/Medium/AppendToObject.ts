type AppendToObject<T, U extends PropertyKey, V> = {
  [P in keyof T | U]: (T & Record<U, V>)[P]
}

// alternative but easiest

// type AppendToObject<T, U extends PropertyKey, V> = {
//   [P in keyof T | U]: P extends keyof T ? T[P] : V
// }

// another alternative

// type Flatten<T> = {
//   [K in keyof T]: T[K]
// }
// type AppendToObject<T, U extends PropertyKey, V> = Flatten<T & { [K in U]: V }>
