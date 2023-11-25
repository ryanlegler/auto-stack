import { mapObject, __spreadValues, __objRest } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const autoStackConfig = {
transform(props) {
  const _a = props, { direction, vAlign, hAlign, breakpoint } = _a, rest = __objRest(_a, ["direction", "vAlign", "hAlign", "breakpoint"]);
  const alignItemsVertical = (hAlign2) => {
    if (hAlign2 === "left") {
      return "flex-start";
    } else if (hAlign2 === "center") {
      return "center";
    } else if (hAlign2 === "right") {
      return "flex-end";
    }
  };
  const alignItemsHorizontal = (vAlign2) => {
    if (vAlign2 === "top") {
      return "flex-start";
    } else if (vAlign2 === "middle") {
      return "center";
    } else if (vAlign2 === "bottom") {
      return "flex-end";
    }
  };
  const alignItemsFn = (direction2) => direction2 === "vertical" ? alignItemsVertical(hAlign) : alignItemsHorizontal(vAlign);
  const justifyContentVertical = (vAlign2) => {
    if (vAlign2 === "top") {
      return "flex-start";
    } else if (vAlign2 === "middle") {
      return "center";
    } else if (vAlign2 === "bottom") {
      return "flex-end";
    }
  };
  const justifyContentHorizontal = (hAlign2) => {
    if (hAlign2 === "left") {
      return "flex-start";
    } else if (hAlign2 === "center") {
      return "center";
    } else if (hAlign2 === "right") {
      return "flex-end";
    }
  };
  const justifyContentFn = (direction2) => direction2 === "vertical" ? justifyContentVertical(vAlign) : justifyContentHorizontal(hAlign);
  const flexDirectionFn = (direction2) => direction2 === "vertical" ? "column" : "row";
  return breakpoint ? {
    [breakpoint]: __spreadValues({
      flexDirection: flexDirectionFn(direction),
      justifyContent: justifyContentFn(direction),
      alignItems: alignItemsFn(direction)
    }, rest)
  } : __spreadValues({
    flexDirection: flexDirectionFn(direction),
    justifyContent: justifyContentFn(direction),
    alignItems: alignItemsFn(direction)
  }, rest);
}}

export const getAutoStackStyle = (styles = {}) => autoStackConfig.transform(styles, { map: mapObject })

export const autoStack = (styles) => css(getAutoStackStyle(styles))
autoStack.raw = getAutoStackStyle