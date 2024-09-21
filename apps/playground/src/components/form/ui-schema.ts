import type { Component, ComponentType } from "./component";
import type { Field, FieldType } from "./fields";
import type { Widget, WidgetType } from "./widgets";

export type UiSchemaRoot = UiSchemaRootIndex & UiSchemaRootContent;

interface UiSchemaRootIndex {
  [key: string]: UiSchemaRootContent[keyof UiSchemaRootContent];
}

type UiSchemaRootContent = UiSchemaCommonContent<
  UiOptions & {
    submitButton?: UiOptions;
  }
> & {
  "ui:rootFieldId"?: string;
};

interface UiSchemaCommonContent<O> {
  "ui:options"?: O;
  items?: UiSchema | UiSchema[];
  anyOf?: UiSchema[];
  oneOf?: UiSchema[];
}

export interface UiOptions {
  class?: string;
  style?: string;
  field?: FieldType | Field<any>;
  component?: ComponentType | Component<any>;
  widget?: WidgetType | Widget<any>;
  title?: string;
  description?: string;
  disabled?: boolean;
  readonly?: boolean;
  autofocus?: boolean;
  placeholder?: string;
  enumNames?: string[];
}

export type UiSchema = UiSchemaIndex & UiSchemaContent;

interface UiSchemaIndex {
  [key: string]: UiSchemaContent[keyof UiSchemaContent];
}

type UiSchemaContent = UiSchemaCommonContent<UiOptions>;