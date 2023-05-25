import React from "react";
import "./App.css";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { WorkTimeline } from "./Components/WorkTimeline";

function App() {
	return (
		<>
			<Intro />
			<WorkTimeline />
			<Projects />
		</>
	);
}

export default App;
