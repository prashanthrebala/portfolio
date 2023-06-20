import React from "react";
import "./App.css";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { WorkTimeline } from "./components/WorkTimeline";
import { Skills } from "./components/Skills";
import { ComingSoon } from "./components/ComingSoon";
import { Box } from "@mui/material";

function App() {
	// create intersection observers here to animate section to section transitions
	return (
		<>
			<Intro />
			<Box
				sx={{ backgroundColor: "#150026", height: { xs: "10vh", md: "20vh" } }}
			/>
			<WorkTimeline />
			<Box
				sx={{ backgroundColor: "#150026", height: { xs: "10vh", md: "20vh" } }}
			/>
			<Projects />
			<Box
				sx={{ backgroundColor: "#150026", height: { xs: "10vh", md: "20vh" } }}
			/>
			<Skills />
			<ComingSoon />
		</>
	);
}

export default App;
