import React from "react";
import "./App.css";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/WorkExperience";
import { Skills } from "./components/Skills";
import { ComingSoon } from "./components/ComingSoon";
import { Box } from "@mui/material";
import { ProjectSection } from "./components/ProjectSection";

function App() {
	// create intersection observers here to animate section to section transitions

	return (
		<>
			<Intro />
			<WorkExperience />
			<ProjectSection />
			<Box
				sx={{ backgroundColor: "#150026", height: { xs: "10vh", md: "20vh" } }}
			/>
			<Skills />
			<ComingSoon />
		</>
	);
}

export default App;
