import { useState, useContext } from "react";
import { Grid, Typography, Alert, Snackbar } from "@mui/material";
import { ProjectItem } from "./ProjectItem";
import { HandJutsu } from "./Projects/HandJutsu";
import { ArticleSummarizr } from "./Projects/ArticleSummarizr";
import { JustBreathe } from "./Projects/JustBreathe";
import { GitHub } from "./Projects/GitHub";
import { BreakpointsContext } from "../contexts/BreakpointsContext";
import workStackBG from "../assets/backgrounds/projects.png";

export const Projects = ({ sectionRef, inView }: any) => {
	const projectItemPadding = 2;
	const { mdScreen } = useContext(BreakpointsContext);
	const [snackbarOpen, setSnackbarOpen] = useState(true);

	const handleCloseSnackbar = () => {
		setSnackbarOpen(false);
	};

	return (
		<>
			<Snackbar
				open={snackbarOpen && inView}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					variant="filled"
					severity="warning"
					sx={{ boxShadow: 12, width: { xs: "80%", md: "60%" } }}
				>
					<Typography variant="body1">
						Under construction! I'm working on suitable designs for the projects
						section. Feel free to check out my GitHub for other projects!
					</Typography>
				</Alert>
			</Snackbar>

			<Grid
				ref={sectionRef}
				minHeight={"100vh"}
				container
				direction={{ md: "row", xs: "column" }}
				sx={{
					// backgroundImage: `url(${workStackBG})`,
					backgroundColor: "#E6E1E1",
					position: "relative",
					backgroundSize: "auto 100%",
					// backgroundRepeat: "no-repeat",
				}}
				padding={projectItemPadding}
			>
				<Grid
					item
					xs={2}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					overflow={"hidden"}
					sx={{ backgroundColor: "rgba(#000, 0)" }}
				>
					<Typography
						fontFamily={"Tillana"}
						// fontFamily={"Roboto"}
						// fontWeight={"300"}
						sx={{
							transform: { md: "rotate(-90deg)" },
							// textShadow: "0.05em 0.05em 0.5em black",
							fontSize: { xs: "3em", md: "3.5em", lg: "5em" },
							marginY: { xs: "1em", md: 0 },
						}}
					>
						Projects
					</Typography>
				</Grid>
				<Grid
					container
					item
					xs={10}
					direction={{ md: "row", xs: "column" }}
					display={"flex"}
				>
					<Grid container item direction={"column"} md={4} xs={12}>
						<Grid item md={8} xs={12} padding={projectItemPadding}>
							<ArticleSummarizr />
						</Grid>

						<Grid item md={4} xs={12} padding={projectItemPadding}>
							<HandJutsu />
						</Grid>
					</Grid>
					<Grid container item direction={"column"} md={8} xs={12}>
						<Grid item md={4} xs={12} padding={projectItemPadding}>
							<ProjectItem backgroundColor={"#e74c3c"} />
						</Grid>

						<Grid container item md={8} xs={12}>
							{mdScreen && (
								<Grid item md={6} xs={12} padding={projectItemPadding}>
									<ProjectItem backgroundColor={"#2ecc71"} />
								</Grid>
							)}
							<Grid
								container
								item
								direction={{ md: "column", xs: "row" }}
								md={6}
								xs={12}
							>
								<Grid item md={6} xs={12} padding={projectItemPadding}>
									<JustBreathe />
								</Grid>
								<Grid item md={6} xs={12} padding={projectItemPadding}>
									<GitHub />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
