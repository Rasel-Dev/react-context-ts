import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CustomCounter from './CustomCounter';
import Store from './contexts/Store';

function App() {
	return (
		<Store>
			<div className='App'>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<CustomCounter />
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</Store>
	);
}

export default App;
