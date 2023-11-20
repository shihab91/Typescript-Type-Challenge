// solution 01
// type Last<T extends any[]> = T extends [...infer U, infer T] ? T : never

// solution 02
type Last<T extends any[]> = [never, ...T][T["length"]]
