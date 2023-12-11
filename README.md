# 📚 AutoStack - A Better React "Stack" Component

AutoStack simplifies React stacking layout for both horizontal and vertical contexts. What sets it apart is its unique approach to alignment control. Unlike other solutions, which require different methods for horizontal and vertical alignment, AutoStack allows you to control alignment using plain English semantic values (top, bottom, middle, left, center, right). This makes AutoStack highly intuitive and user-friendly.

It also supports the full power of pandaCSS, which includes it's responsive prop syntax for the direction and alignment controls. See more details below.

## Installation

Install the `autostack-ui` dependency with your package manager of choice:

```bash
pnpm add autostack-ui
```

## Install and configure PandaCss

```bash
pnpm add -D @pandacss/dev
pnpm panda init --postcss
```

See details [here](https://panda-css.com/docs/installation/nextjs) for next.js or other react framework of choice

1. Update `compilerOptions` in `tsConfig.json`

    ```css
    "target":"es6", ;
    ```

2. configure codegen

    - Add to `package.json` in the `scripts`

    ```jsx
     "prepare": "panda codegen",
    ```

3. Configure layers
    - Add to `src/app/globals.css`

```css
@layer reset, base, tokens, recipes, utilities;
```

4. Configure your `panda.config.ts``

```
export default defineConfig({

    include: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./node_modules/autostack-ui/src/components/**/*.tsx", // this ensures that the extraction will work correctly.
    ],

    // Use React
    jsxFramework: "react", // allows for jsx style props -  https://panda-css.com/docs/guides/dynamic-styling#jsx-style-props

    // this ensures that all the properties are extracted for all breakpoints
    staticCss: {
        css: [
            {
                properties: {
                    justifyContent: [
                        "flex-start",
                        "flex-end",
                        "center",
                        "space-between",
                        "space-around",
                        "space-evenly",
                    ],
                    alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
                    flexDirection: ["row", "column"],
                },
                responsive: true,
            },
        ],
    },

    emitPackage: true, // this puts the styled-system in the node_modules
    outdir: "autostack-ui/styled-system", // this makes sure we use the same styled-system that autostack uses - this prevents multiple instances of the base utilities
});
```

## Usage

Import the AutoStack component from the package and use it in your React components:

```tsx
import { AutoStack } from "autostack-ui";

function MyComponent() {
    return (
        <AutoStack>
            <div>Child 1</div>
            <div>Child 2</div>
        </AutoStack>
    );
}
```

## Props

The following props can be passed to the `AutoStack` component:

-   `direction`: (string) The direction to stack the children. Can be `"horizontal"` or `"vertical"`. Defaults to `"horizontal"`.

-   `vAlign`: (string) The vertical alignment of the children. Can be `"top"`, `"center"`, or `"bottom"`. Defaults to `"top"`.

-   `hAlign`: (string) The horizontal alignment of the children. Can be `"left"`, `"center"`, or `"right"`. Defaults to `"left"`.

-   `children`: (ReactNode) The children to stack.

-   `className`: (string) Any additional CSS classes to apply to the component - will get statically extracted by pandaCSS

## Example Basic Props Usage

```tsx
import { AutoStack } from "autostack-ui";

function MyComponent() {
    return (
        <AutoStack
            style={{ height: "500px" }} // just so we can see the effect of the vertical align
            direction="vertical"
            vAlign="middle"
            hAlign="center"
        >
            <div>📚</div>
            <div>📚</div>
            <div>📚</div>
        </AutoStack>
    );
}
```

## Responsive Props

The `AutoStack` component supports responsive design by allowing you to specify the direction, vAlign, and hAlign props using PandaCSS's responsive syntax.

Note: currently only the `property-based-modifier` syntax is supported and only with this subset of the full set of pandaCSS response keys:

```
["base", "sm", "md", "lg", "xl", "2xl"]
```

https://panda-css.com/docs/concepts/responsive-design#property-based-modifier

## How It Works

```tsx
import { AutoStack } from "autostack-ui";

return (
    <AutoStack
        style={{ height: "500px" }} // just so we can see the effect of the vertical align
        vAlign={{
            base: "top",
            sm: "middle",
            md: "bottom",
        }}
        hAlign={{
            base: "left",
            sm: "center",
            md: "right",
        }}
        direction="vertical"
    >
        <div>📚</div>
        <div>📚</div>
        <div>📚</div>
    </AutoStack>
);
```

### Can mix and match props with the responsive syntax and some without

```tsx
import { AutoStack } from "autostack-ui";

return (
    <AutoStack
        style={{ height: "500px" }} // just so we can see the effect of the vertical align
        vAlign="middle"
        hAlign="center"
        direction={{
            base: "vertical",
            sm: "horizontal",
        }}
    >
        <div>📚</div>
        <div>📚</div>
        <div>📚</div>
    </AutoStack>
);
```

### Can define as many or as few breakpoints foe each responsive object

```tsx
import { AutoStack } from "autostack-ui";

return (
    <AutoStack
        style={{ height: "500px" }} // just so we can see the effect of the vertical align
        vAlign="middle"
        hAlign="center"
        direction={{
            base: "horizontal",
            2xl: "horizontal", // in this case we will fallback to the base horizontal until we hot the xl breakpoint
        }}
    >
        <div>📚</div>
        <div>📚</div>
        <div>📚</div>
    </AutoStack>
);
```

## PandaCSS Support

The AutoStack component can take classNames with a css function, or be used with style props
https://panda-css.com/docs/concepts/style-props

### Example `gap` style prop

```tsx
import { AutoStack } from "autostack-ui";
return (
    <AutoStack gap="4" p="10" fontSize="4xl">
        <div>📚</div>
        <div>📚</div>
        <div>📚</div>
    </AutoStack>
);
```

### Example with css function returning a string to the className prop

```jsx
import { AutoStack } from "autostack-ui";
import { css } from "autostack-ui/styled-system/css";

return (
    <AutoStack
        gap="3"
        fontSize="4xl"
        vAlign="middle"
        hAlign="center"
        className={css({
            outline: "10px solid gold",
            height: "100vh",
        })}
    >
        <div>📚</div>
        <div>📚</div>
        <div>📚</div>
    </AutoStack>
);
```

# Contributing

## Next App

    [] we probably don't actually need the next app at all. i was using some different pages and state based toggles to test different functionality - this can and maybe should just be done with storybook, unless this repo should also function as the

## Storybook

## Chromatic
