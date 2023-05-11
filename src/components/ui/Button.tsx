import { cva } from "cva";

const button = cva(
    "rounded-md relative", {
        variants: {
            intent: { //can also change intent here to variant
                primary: "",
                secondary: "",
                danger: "",
                monochrome: "",
            },
            outline: {
                true: "bg-transparent border",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariatns: {
            intent: "primary",
            fullwidt: false
        },
        compoundVariants: [{
            intent: "danger",
            outline: true,
            class: "",
        }]
    },
);