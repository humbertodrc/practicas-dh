import {clsx} from "clsx";
import {useState, useContext, useEffect} from "react";
import {getCharacteres} from "./api/getCharacteres";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Text, { Character } from "./components";
import {ThemeContext} from "./context/ThemeContext";

function App() {
	const {theme, toggleTheme} = useContext(ThemeContext);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getCharacteres().then((value) => setCharacters(value));
	}, []);

	return (
		// <div className={`h-screen w-full ${theme === "dark" ? `bg-black` : `bg-white`}`}>
		<div className={clsx("h-screen w-ful", theme === "dark" && "bg-black")}>
			<div className="flex justify-center pt-20">
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<Text.Paragraph>Vite + React</Text.Paragraph>
			<button
				className="p-4 bg-blue-700 rounded-lg uppercase text-white mt-4"
				onClick={toggleTheme}
			>
				Cambiar Theme
			</button>

			<Character characters={characters} />
		</div>
	);
}

export default App;
