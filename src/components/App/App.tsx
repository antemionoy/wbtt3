import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { keyPressed, addArrowActive } from 'redux/actions';
import KeyCodes from 'types/keyCodes';
import { initState } from 'types/initState';

const App: React.FC = () => {
	const dispatch = useDispatch();
	const {
		defaultPoints,
		error,
		points,
		lives,
		arrowsActive,
		keysSuccessPressed,
	} = useSelector((store: initState) => store);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const arrowNames = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
			const currentKey = arrowNames[Math.floor(Math.random() * 4)];
			dispatch(addArrowActive(currentKey));
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			dispatch(keyPressed(e.code));
		};
		document.addEventListener<'keydown'>('keydown', handleKey);
		return () => document.removeEventListener<'keydown'>('keydown', handleKey);
	}, []);

	const ArrowClass = cn('main-container__input-value');
	// {
	// ['main-container__input-value_aligned']: gameStats?.alignedIndexes.indexOf(index) !== -1,
	// },

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="main-container">
				{defaultPoints === points && <p>You won</p>}
				{defaultPoints === error && <p>You lose</p>}
				{!!lives &&
					<>
						<div className="main-container__input">
							<p className="main-container__input-title">Next:</p>
							<div className="main-container__input-values">
								{arrowsActive?.length > 0 && arrowsActive.map((element: string, index: number) => (
									<div className={ArrowClass} data-index={index} key={index}>{KeyCodes[element]}</div>
								))}
							</div>
						</div>
						<div className="main-container__input">
							<p className="main-container__input-title">Input:</p>
							<div className="main-container__input-values">
								{keysSuccessPressed?.length > 0 && keysSuccessPressed.map((element: string, index: number) => (
									<div className={ArrowClass} key={index}>{KeyCodes[element]}</div>
								))}
							</div>
						</div>
						<div className="main-container__input">
							<div className="main-container__input-value main-container__input-value_error">
								{!!lives && Array(lives).fill('❤️').map(l => l)}
							</div>
						</div>
					</>
				}
			</section>
		</div>
	);
}

export default App;
