import { css, cva } from "autostack-ui/styled-system/css";

export const Contents = ({ flexIndex }: { flexIndex?: number }) => {
    return (
        <>
            {new Array(3).fill("").map((_, index) => {
                return (
                    <div
                        key={index}
                        className={css({
                            flexGrow: index === flexIndex ? 1 : "initial",
                            bg: "magenta",
                            p: "3",
                        })}
                    >
                        🚀
                    </div>
                );
            })}
        </>
    );
};
