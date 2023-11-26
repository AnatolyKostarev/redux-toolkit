import React, {ButtonHTMLAttributes, FC} from 'react';
import clsx from 'clsx'
import s from './Button.module.css'

interface ButtonType {
    dark?: string,
    outline?: string,
}

const themes: ButtonType = {
    dark: s.dark,
    outline: s.outline
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: keyof typeof themes
    className?: string
}
const Button: FC<ButtonProps> = ({ theme, children, className }) => {
    return (
        <button className={clsx(s.btn, theme ? themes[theme] : null, className)} type="button">
            {children}
        </button>
    );
};

export default Button;
