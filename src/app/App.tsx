import { Route, Routes, Link } from 'react-router-dom';
import '../app/styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';



export const App = () => {
	const {theme, toggleThem} = useTheme()
	return (
		<div className={classNames('app', {hover: true, selected: true}, [theme])}>
			<button onClick={toggleThem} >THEM</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>

			<AppRouter/>
		
		</div>
	);
};
