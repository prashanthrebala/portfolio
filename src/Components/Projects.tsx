import { Grid } from "@mui/material";
import { ProjectItem } from "./ProjectItem";
import React from "react";

export const Projects = () => {
	return (
		<Grid
			container
			bgcolor={"white"}
			minHeight={"100vh"}
			direction={{ md: "row", xs: "column" }}
		>
			<Grid container item direction={"column"} md={4} xs={12}>
				<Grid item md={8} xs={12} padding={1}>
					<ProjectItem name={"Project 1"} backgroundColor={"#2980b9"} />
				</Grid>
				<Grid item md={4} xs={12} padding={1}>
					<ProjectItem name={"Project 2"} backgroundColor={"#e67e22"} />
				</Grid>
			</Grid>
			<Grid container item direction={"column"} md={8} xs={12}>
				<Grid item md={4} xs={12} padding={1}>
					<ProjectItem name={"Project 3"} backgroundColor={"#e74c3c"} />
				</Grid>

				<Grid container item md={8} xs={12}>
					<Grid item md={6} xs={12} padding={1}>
						<ProjectItem name={"Project 4"} backgroundColor={"#2ecc71"} />
					</Grid>
					<Grid
						container
						item
						direction={{ md: "column", xs: "row" }}
						md={6}
						xs={12}
					>
						<Grid item md={6} xs={12} padding={1}>
							<ProjectItem name={"Project 5"} backgroundColor={"#9b59b6"} />
						</Grid>
						<Grid item md={6} xs={12} padding={1}>
							<ProjectItem name={"Project 6"} backgroundColor={"#2c3e50"} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
