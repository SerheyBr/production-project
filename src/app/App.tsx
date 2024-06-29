import { Route, Routes, Link } from 'react-router-dom';
import '../app/styles/index.scss'
import { Suspense, useContext, useState } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';


export const App = () => {
	const {theme, toggleThem} = useTheme()
	return (
		<div className={classNames('app', {hover: true, selected: true}, [theme])}>
			<button onClick={toggleThem} >THEM</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>

		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/' element={<MainPage/>} />
				<Route path='/about' element={<AboutPage/>}/>
			</Routes>
      </Suspense>
		
		</div>
	);
};
