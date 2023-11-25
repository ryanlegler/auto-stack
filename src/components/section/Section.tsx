import { grid } from "@/../styled-system/patterns";
import { css } from "@/../styled-system/css";
import { SectionConfig } from "@/constants/sections";

export function Section({
    section,
    items = 3,
    CustomElement,
}: {
    section: SectionConfig;
    items?: number;
    CustomElement?: any;
}) {
    const Element = CustomElement || "div";
    return (
        <Element direction="vertical" gap="5" hAlign="stretch">
            <h1
                className={css({
                    color: "gray.100",
                })}
            >
                {section.label}
            </h1>
            <div className={grid({ columns: 3, gap: "6" })}>
                {section.items.map((item, index) => (
                    <div key={index}>
                        <h1>
                            vAlign: {item.vAlign} | hAlign: {item.hAlign}
                        </h1>
                        <Element
                            direction={section.direction}
                            hAlign={item.hAlign}
                            vAlign={item.vAlign}
                            gap="5"
                            className={section.css}
                        >
                            {new Array(items).fill("").map((_, index) => {
                                const resolvedOverrides = item?.override?.(index) || {};
                                return (
                                    <div
                                        key={index}
                                        className={css(
                                            {
                                                bg: "magenta",
                                                p: "3",
                                                lineHeight: "1",
                                                overflow: "hidden",
                                                borderRadius: "10px",
                                            },
                                            resolvedOverrides
                                        )}
                                    >
                                        🚀
                                    </div>
                                );
                            })}
                        </Element>
                    </div>
                ))}
            </div>
        </Element>
    );
}
