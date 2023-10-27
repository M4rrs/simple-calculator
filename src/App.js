import logo from './logo.svg';
import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
	const initialState = "";
	const [state, setResult] = useState("");
	const taSize = useRef(null);
	
	useEffect (() => {
		taSize.current.style.height = "auto";
		taSize.current.style.height = taSize.current.scrollHeight + "px";
	}, [state]);
	
	const handleClick = (e) => {
		if (state === "Error") {
			clear();
			setResult(e.target.name);
		}
		else
			setResult(state.concat(e.target.name));
	}

	const clear = (e) => { setResult(""); }

	const backspace = (e) => {
		if (state === "Error")
			clear();
		else
			setResult(state.slice(0, -1));
	}

	const hasDecimals = (num) => {
		if (num - Math.floor(num) !== 0)
			return true;
		else
			return false;
	}

	const calculate = (e) => {
		let res = 0;
		try {
			let result = Function('return ' + state)();
			res = result;
			if (isNaN(res))
				throw new Error("");
		}
		catch (err) {
			setResult("Error");
			return;
		}

		setResult("");
		if (hasDecimals(res)) {
			res = res.toFixed(5);
		}
		setResult(res.toString());
	}

	return (
		<div className="wrap">
			<div className="calculator">
				<div class="output">
					<div className="prev-op"></div>
					<textarea rows="1" value={state} ref={taSize}></textarea>
				</div>
				<button className='button-2' onClick={clear}>AC</button>
				<button onClick={backspace}>DEL</button>
				<button name="/" onClick={handleClick}>/</button>
				<button name="1" onClick={handleClick}>1</button>
				<button name="2" onClick={handleClick}>2</button>
				<button name="3" onClick={handleClick}>3</button>
				<button name="*" onClick={handleClick}>*</button>
				<button name="4" onClick={handleClick}>4</button>
				<button name="5" onClick={handleClick}>5</button>
				<button name="6" onClick={handleClick}>6</button>
				<button name="+" onClick={handleClick}>+</button>
				<button name="7" onClick={handleClick}>7</button>
				<button name="8" onClick={handleClick}>8</button>
				<button name="9" onClick={handleClick}>9</button> 
				<button name="-" onClick={handleClick}>-</button>
				<button name="0" onClick={handleClick}>0</button>
				<button name="." onClick={handleClick}>.</button>
				<button className='button-2' onClick={calculate}>=</button>
			</div>
		</div>
	);
}

export default App;
