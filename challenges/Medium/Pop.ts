type Pop<T extends unknown[]> = T extends [...infer F, infer L] ? F : []
