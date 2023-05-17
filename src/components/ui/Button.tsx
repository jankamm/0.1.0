import { cva, VariantProps } from "cva"

const button = cva(
    "rounded-md relative", {
        variants: {
            variant: { //can also change intent here to variant
                default: "",
                outline: "",
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
        
        defaultVariants: {
            variant: "default",
            fullWidth: false
        },
        compoundVariants: [{
            variant: "danger",
            outline: true,
            class: "",
        }]
    },
);