import "./App.css";
import logo from "./assets/LogoNameMd.svg";
import loading from "./assets/ThreeDotsSpinner.svg";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<img src={loading} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
