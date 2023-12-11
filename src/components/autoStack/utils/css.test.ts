import fs from "fs";
import path from "path";

import { describe, expect, test } from "vitest";

describe("CSS file content", () => {
    test("should include specific CSS rule", () => {
        const cssFilePath = path.resolve(__dirname, "../../../../.next/static/css/app/layout.css");
        const fileContent = fs.readFileSync(cssFilePath, "utf-8");
        expect(fileContent).toContain(":d_flex > *:not(.grow_0)");
        expect(fileContent).toContain(":flex_1_0_auto > *:not(.grow_0)");
    });
});
