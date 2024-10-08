import type { UiSchema } from "@/core/ui-schema";
import {
  type IdSchema,
  toIdSchema as toIdSchemaInternal,
} from "@/core/id-schema";
import {
  isSelect as isSelectInternal,
  isMultiSelect as isMultiSelectInternal,
  retrieveSchema as retrieveSchemaInternal,
  getDefaultFormState as getDefaultFormStateInternal,
  getClosestMatchingOption as getClosestMatchingOptionInternal,
  sanitizeDataForNewSchema as sanitizeDataForNewSchemaInternal,
  type Schema,
  type SchemaValue,
  type ValidationError,
} from "@/core/schema";

import type { FormContext } from "./context";

export const NO_ERRORS: ValidationError<unknown>[] = [];

export function getErrors(ctx: FormContext, idSchema: IdSchema<SchemaValue>) {
  return ctx.validationErrors.get(idSchema.$id) ?? NO_ERRORS;
}

export function sanitizeDataForNewSchema(
  ctx: FormContext,
  newSchema: Schema,
  oldSchema: Schema,
  formData: SchemaValue | undefined
) {
  return sanitizeDataForNewSchemaInternal(
    ctx.validator,
    ctx.schema,
    newSchema,
    oldSchema,
    formData
  );
}

export function getClosestMatchingOption(
  ctx: FormContext,
  formData: SchemaValue | undefined,
  options: Schema[],
  selectedOption: number,
  discriminatorField: string | undefined
) {
  return getClosestMatchingOptionInternal(
    ctx.validator,
    ctx.schema,
    formData,
    options,
    selectedOption,
    discriminatorField
  );
}

export function retrieveSchema(
  ctx: FormContext,
  schema: Schema,
  formData: SchemaValue | undefined
) {
  return retrieveSchemaInternal(ctx.validator, schema, ctx.schema, formData);
}

export function getUiOptions(ctx: FormContext, uiSchema: UiSchema) {
  const globalUiOptions = ctx.uiSchema["ui:globalOptions"];
  const uiOptions = uiSchema["ui:options"];
  return globalUiOptions !== undefined
    ? { ...globalUiOptions, ...uiOptions }
    : uiOptions;
}

export function isSelect(ctx: FormContext, schema: Schema) {
  return isSelectInternal(ctx.validator, schema, ctx.schema);
}

export function isMultiSelect(ctx: FormContext, schema: Schema) {
  return isMultiSelectInternal(ctx.validator, schema, ctx.schema);
}

export function toIdSchema(
  ctx: FormContext,
  schema: Schema,
  id?: string,
  formData?: SchemaValue
): IdSchema<SchemaValue> {
  return toIdSchemaInternal(
    ctx.validator,
    schema,
    ctx.idPrefix,
    ctx.idSeparator,
    [],
    id,
    ctx.schema,
    formData
  );
}

export function getDefaultFormState(
  ctx: FormContext,
  schema: Schema,
  formData: SchemaValue | undefined
) {
  return getDefaultFormStateInternal(
    ctx.validator,
    schema,
    formData,
    ctx.schema,
    false
  );
}