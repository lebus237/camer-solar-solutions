import React from "react";
import {cn} from "../../../lib/styles/classnames";

interface ButtonProps {
    children?: React.ReactNode;
    className?: any;
    type?: 'primary'|'default';
    variant?: 'solid'|'outline';
    onClick?: () => void;
    disabled?: boolean;
    label?: string;
}

const  buttonStyles = (type: ButtonProps['type'], variant: ButtonProps['variant']) => {
    switch (type) {
        case 'primary':
            if (variant === 'solid') {
                return 'bg-emerald-600 text-white'
            }
            return 'border border-emerald-600 text-emerald-600'
        default:
            if (variant === 'solid') {
                return 'bg-white text-black'
            }
            return 'border border-white text-white'
    }
}

const Button = (props: ButtonProps) => {


    return<button className={cn("px-6 py-3 rounded-sm", buttonStyles(props.type ?? 'primary', props.variant ?? 'solid'), props.className)}>
        <span>{props.label}</span>
    </button>
}

export default Button;
