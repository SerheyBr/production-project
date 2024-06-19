
import { Route, Routes, Link } from 'react-router-dom';
// import { Counter } from './components/Counter';
import './styles/index.scss'
// import { MainPage } from './pages/MainPage/MainPage';
// import { AboutPage } from './pages/AboutPage/AboutPage';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense, useContext, useState } from 'react';
import { ThemContext, Theme } from './theme/themeContext';
import { useTheme } from './theme/useTheme';

export const App = () => {
	const {theme, toggleThem} = useTheme()
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleThem} >THEM</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>

		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/' element={<MainPageAsync/>} />
				<Route path='/about' element={<AboutPageAsync/>}/>
			</Routes>
      </Suspense>
		
		</div>
	);
};
