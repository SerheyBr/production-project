import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';
import { clear } from 'console';

export enum ThemeButton {
	CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme: ThemeButton
}

export const Button:FC<ButtonProps> = (props) => {
	const {
		children,
		className,
		theme,
		...otherProps
	} = props
	return (
		<button className={classNames(cls.Button, {}, [cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};