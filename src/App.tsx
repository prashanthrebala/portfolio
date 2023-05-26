import React from "react";
import "./App.css";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { WorkTimeline } from "./Components/WorkTimeline";
import { Box } from "@mui/material";
import wave1 from "./Assets/layered-waves.svg";

function App() {
	return (
		<>
			<Intro />
			<Box
				sx={{
					backgroundImage: `url(${wave1})`,
					width: "100%",
					height: "200px",
					margin: "-1rem 0rem",
				}}
			/>
			<WorkTimeline />
			<Projects />
		</>
	);
}

export default App;
