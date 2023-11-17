type MyExclude<T, U> = T extends U ? never : T

type E = MyExclude<"a" | "b" | "c", "a"> //  "b" | "c"
