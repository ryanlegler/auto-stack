/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index';
import type { Properties } from '../types/csstype';
import type { PropertyValue } from '../types/prop-type';
import type { DistributiveOmit } from '../types/system-types';
import type { Tokens } from '../tokens/index';

export interface AutoStackProperties {
   breakpoint?: ConditionalValue<"sm" | "md">
	direction?: ConditionalValue<"horizontal" | "vertical">
	vAlign?: ConditionalValue<"top" | "middle" | "bottom" | "between" | "around" | "evenly" | "stretch">
	hAlign?: ConditionalValue<"left" | "center" | "right" | "between" | "around" | "evenly" | "stretch">
}


interface AutoStackStyles extends AutoStackProperties, DistributiveOmit<SystemStyleObject, keyof AutoStackProperties > {}

interface AutoStackPatternFn {
  (styles?: AutoStackStyles): string
  raw: (styles?: AutoStackStyles) => SystemStyleObject
}

/** A better flexbox system */
export declare const autoStack: AutoStackPatternFn;
