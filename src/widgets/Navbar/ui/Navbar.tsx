import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { AppLink, AppLinkThem } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
	className?: string,
}

export const Navbar = ({className}:NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<ThemeSwitcher/>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.mainLink}>Main</AppLink>
				<AppLink to={'/about'} theme={AppLinkThem.SECONDARY} >About</AppLink>
			</div>
				
		</div>
	);
};



