import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom';
import { FC, PropsWithChildren, ReactElement } from 'react';

export enum AppLinkThem {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
	className?: string,
	theme?: AppLinkThem,
}

export const AppLink:FC<AppLinkProps> = (props) => {
	const {
		to,
		className,
		children,
		theme = AppLinkThem.PRIMARY,
		...otherProps
	} = props
	return (
		<Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
			{children}
		</Link>
	);
};