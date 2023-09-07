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
import MidWrapper from "./components/MidWrapper";

function App() {
	// create intersection observers here to animate section to section transitions
	// https://colorhunt.co/palette/f6f1f1afd3e219a7ce146c94
	return (
		<BreakpointsProvider>
			<MidWrapper>
				<Intro />
				<WorkExperience />
				<ProjectSection />
				<Skills />
				<ComingSoon />
			</MidWrapper>
		</BreakpointsProvider>
	);
}

export default App;
