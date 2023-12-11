import { describe, expect, test } from "vitest";
import { getUsedBreakpoints } from "./getUsedBreakpoints";

describe("getUsedBreakpoints", () => {
    test("getUsedBreakpoints 1 from each", () => {
        const result = getUsedBreakpoints({
            hAlign: {
                base: "left",
            },
            vAlign: {
                sm: "middle",
            },
            direction: {
                lg: "vertical",
            },
        });

        expect(result).toEqual(expect.arrayContaining(["base", "sm", "lg"]));
    });

    test("getUsedBreakpoints with horizontal direction", () => {
        const result = getUsedBreakpoints({
            hAlign: {
                base: "left",
                sm: "center",
                md: "right",
                lg: "stretch",
            },
            vAlign: {
                base: "top",
                sm: "middle",
                md: "bottom",
                lg: "stretch",
            },
            direction: "horizontal",
        });
        expect(result).toEqual(expect.arrayContaining(["base", "sm", "md", "lg"]));
    });
    test("getUsedBreakpoints no breakpoint syntax used", () => {
        const result = getUsedBreakpoints({
            hAlign: "left",
            vAlign: "top",
            direction: "horizontal",
        });

        expect(result).toEqual([]);
    });
});
