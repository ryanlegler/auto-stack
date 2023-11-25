/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AutoStackProperties } from '../patterns/auto-stack';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AutoStackProps extends AutoStackProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AutoStackProperties > {}

/** A better flexbox system */
export declare const AutoStack: FunctionComponent<AutoStackProps>