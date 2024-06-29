import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routConfig } from 'shared/config/routConfig/routConfig';

export const AppRouter = () => {
	return (
	<Suspense fallback={<div>Loading...</div>}>
		<Routes>
			{Object.values(routConfig).map(({element, path}) => ( 
				<Route key={path} element={element} path={path}/>

			))}
		</Routes>
	</Suspense>
	);
};

