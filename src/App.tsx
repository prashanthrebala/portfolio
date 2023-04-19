import React from "react";
import "./App.css";
import { Intro } from "./Components/Intro";
import { Work } from "./Components/Work";
import { Projects } from "./Components/Projects";

function App() {
	return (
		<>
			<Intro />
			<Work />
			<Projects />
		</>
	);
}

export default App;
