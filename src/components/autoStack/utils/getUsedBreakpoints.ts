import { AutoStackPropsSlim } from "../types";
import { BREAKPOINT_VALUES } from "../constants";

export function getUsedBreakpoints({ hAlign, vAlign, direction }: AutoStackPropsSlim) {
    const properties = [direction, vAlign, hAlign];

    const usedBreakpoints = properties.reduce((acc, property) => {
        if (typeof property === "object") {
            Object.keys(property).forEach((key) => acc.add(key));
        }
        return acc;
    }, new Set<string>());
    return Array.from(usedBreakpoints) as (typeof BREAKPOINT_VALUES)[number][];
}
