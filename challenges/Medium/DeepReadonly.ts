type DeepReadonly<T> = T extends Function
  ? T
  : T extends object
  ? {
      readonly [P in keyof T]: DeepReadonly<T[P]>
    }
  : T

// Base Case - Function Types: The first part of the type, T extends Function ? T, serves as a base case. It checks if the type T is a function. If it is, it returns T unchanged. The rationale behind this is that functions are considered leaf nodes in the object tree, and making them readonly doesn't make sense in the context of this utility.

// Recursive Case - Object Types: The second part, T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]>; }, handles the case where T is an object. If T is an object, it creates a new object with the same keys as T, but each property is recursively transformed using DeepReadonly. This ensures that the transformation is applied deeply to all nested properties.

// Fallback Case - Non-Object, Non-Function Types: The last part, : T, is a fallback case. If T is neither a function nor an object, it means it's a primitive type or some other non-object type. In such cases, we leave it unchanged.
