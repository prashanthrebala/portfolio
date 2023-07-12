import React from "react";
import "./App.css";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/WorkExperience";
import { Skills } from "./components/Skills";
import { ComingSoon } from "./components/ComingSoon";
import { Box } from "@mui/material";
import { ProjectSection } from "./components/ProjectSection";
import { BreakpointsProvider } from "./contexts/BreakpointsContext";

function App() {
	// create intersection observers here to animate section to section transitions
	// https://colorhunt.co/palette/f6f1f1afd3e219a7ce146c94
	return (
		<BreakpointsProvider>
			<Intro />
			<WorkExperience />
			<ProjectSection />
			<Box
				sx={{ backgroundColor: "#F6F1F1", height: { xs: "10vh", md: "20vh" } }}
			/>
			<Skills />
			<ComingSoon />
		</BreakpointsProvider>
	);
}

export default App;
