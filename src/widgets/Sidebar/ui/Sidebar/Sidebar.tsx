import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
	className?: string,
}

export const Sidebar = ({className}:SidebarProps) => {
	const [colapsed, setColapsed] = useState(false)

	const onToggle = () => {
		setColapsed(prev => !prev)
	}
	return (
		<div className={classNames(cls.Sidebar, {[cls.colapsed]: colapsed}, [className])}>
			<button onClick={onToggle} >toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
			</div>
		</div>
	);
};