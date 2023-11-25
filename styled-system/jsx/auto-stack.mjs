import { createElement, forwardRef } from 'react'
import { styled } from './factory.mjs';
import { getAutoStackStyle } from '../patterns/auto-stack.mjs';

export const AutoStack = /* @__PURE__ */ forwardRef(function AutoStack(props, ref) {
  const { breakpoint, direction, vAlign, hAlign, ...restProps } = props
const styleProps = getAutoStackStyle({breakpoint, direction, vAlign, hAlign})
return createElement(styled.div, { ref, ...styleProps, ...restProps })
})