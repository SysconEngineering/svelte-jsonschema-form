import type { Component as SvelteComponent, Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

import type { PropOrDefault } from "@/lib/types";

import type { Schema, SchemaType } from "./schema";

export interface FormComponentProps extends HTMLAttributes<HTMLFormElement> {
  form: HTMLFormElement | undefined;
  children: Snippet;
}

export type ComponentType = SchemaType | "form";

export interface ComponentProps {
  form: FormComponentProps;
}

export interface ComponentExports {}

export interface ComponentBindings {
  form: "form";
}

export interface ComponentOptions<T extends ComponentType> {
  type: T;
  schema: Schema;
}

export type Component<T extends ComponentType> = SvelteComponent<
  PropOrDefault<ComponentProps, T, {}>,
  PropOrDefault<ComponentExports, T, {}>,
  PropOrDefault<ComponentBindings, T, "">
>;
