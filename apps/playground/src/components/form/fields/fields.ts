import type { Field, Fields, FieldType } from "./model";

import Root from "./root.svelte";

export const registry: { [T in FieldType]: Field<T, any> } = {
  root: Root,
};

export const fields: Fields = (type) => registry[type]
