import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightTheme from '../assets/icons/theme-light.svg'
import DarkTheme from '../assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/button/Button';


interface ThemeSwitcherProps {
	className?: string,
}

export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
	const {theme, toggleThem} = useTheme()
	return (

			
			
			<Button className={classNames(cls.ThemeSwitcher, {}, [theme])} onClick={toggleThem} theme={ThemeButton.CLEAR}>
				{theme === Theme.DARK ? <DarkTheme/> : <LightTheme/>}
			</Button>
	
	);
};