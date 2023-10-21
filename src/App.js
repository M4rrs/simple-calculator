import logo from './logo.svg';
import './App.css';

function App() {
  return (
  	<div className="wrap">
		<div className="calculator">
			<div className="output">
				<div className="prev-op">12345</div>
				<div className="curr-op"></div>
			</div>
			<button className='button-2'>AC</button>
			<button>DEL</button>
			<button>+</button>
			<button>1</button>
			<button>2</button>
			<button>3</button>
			<button>*</button>
			<button>4</button>
			<button>5</button>
			<button>6</button>
			<button>+</button>
			<button>7</button>
			<button>8</button>
			<button>9</button> 
			<button>-</button>
			<button>0</button>
			<button>.</button>
			<button className='button-2'>=</button>
		</div>
	</div>
  );
}

export default App;
