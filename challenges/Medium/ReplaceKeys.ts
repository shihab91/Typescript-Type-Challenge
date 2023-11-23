type ReplaceKeys<InputObject, SearchKeys, UpdaterObject> = {
  [InputKeys in keyof InputObject]: InputKeys extends SearchKeys
    ? InputKeys extends keyof UpdaterObject
      ? UpdaterObject[InputKeys]
      : never
    : InputObject[InputKeys]
}
