type AppendToObject<T, U extends PropertyKey, V> = {
  [P in keyof T | U]: (T & Record<U, V>)[P]
}
