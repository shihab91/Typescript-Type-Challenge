type Last<T extends any[]> = T extends [...infer U, infer T] ? T : never
