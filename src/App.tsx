import React from "react";
import "./App.css";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { WorkTimeline } from "./Components/WorkTimeline";
import { Skills } from "./Components/Skills";
import { Box } from "@mui/material";
import wave1 from "./Assets/layered-waves.svg";
import wave2 from "./Assets/layered-waves-haikei-2.svg";

function App() {
	return (
		<>
			<Intro />
			{/* <Box
				sx={{
					backgroundImage: `url(${wave1})`,
					width: "100%",
					height: "200px",
					margin: "-0.1rem 0rem",
				}}
			/> */}
			<WorkTimeline />
			{/* <Box
				sx={{
					backgroundImage: `url(${wave2})`,
					width: "100%",
					height: "200px",
					margin: "-0.1rem 0rem",
				}}
			/> */}
			<Projects />
			<Skills />
		</>
	);
}

export default App;
