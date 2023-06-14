import React from "react";
import "./App.css";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { WorkTimeline } from "./Components/WorkTimeline";
import { Skills } from "./Components/Skills";
import { ComingSoon } from "./Components/ComingSoon";
import { Box } from "@mui/material";

function App() {
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
