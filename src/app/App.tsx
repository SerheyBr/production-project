import { Route, Routes, Link } from 'react-router-dom';
import '../app/styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Theme } from './providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';




export const App = () => {
	const {theme} = useTheme()
	
	return (
		<div className={classNames('app', {hover: true, selected: true}, [theme])}>
			{/* <button onClick={toggleThem} >THEM</button> */}
			<Navbar />
			<AppRouter/>
		
		</div>
	);
};
