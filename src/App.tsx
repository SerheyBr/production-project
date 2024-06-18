
import { Route, Routes, Link } from 'react-router-dom';
// import { Counter } from './components/Counter';
import './index.scss'
// import { MainPage } from './pages/MainPage/MainPage';
// import { AboutPage } from './pages/AboutPage/AboutPage';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';


export const App = () => {
	return (
		<div className='app'>
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
