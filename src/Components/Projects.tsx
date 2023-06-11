import { Grid, Typography } from "@mui/material";
import { ProjectItem } from "./ProjectItem";
import { GitHub } from "./Projects/GitHub";

export const Projects = () => {
	const projectItemPadding = 2;

	return (
		<>
			<Grid
				minHeight={"100vh"}
				container
				direction={{ md: "row", xs: "column" }}
				sx={{
					backgroundColor: "#150026",
					position: "relative",
					backgroundSize: "cover",
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
					sx={{ backgroundColor: "rgba(#000, 0)", color: "white" }}
				>
					<Typography
						variant="h2"
						sx={{
							transform: { md: "rotate(-90deg)" },
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
							<ProjectItem backgroundColor={"#2980b9"} />
						</Grid>
						<Grid item md={4} xs={12} padding={projectItemPadding}>
							<ProjectItem backgroundColor={"#e67e22"} />
						</Grid>
					</Grid>
					<Grid container item direction={"column"} md={8} xs={12}>
						<Grid item md={4} xs={12} padding={projectItemPadding}>
							<ProjectItem backgroundColor={"#e74c3c"} />
						</Grid>

						<Grid container item md={8} xs={12}>
							<Grid item md={6} xs={12} padding={projectItemPadding}>
								<ProjectItem backgroundColor={"#2ecc71"} />
							</Grid>
							<Grid
								container
								item
								direction={{ md: "column", xs: "row" }}
								md={6}
								xs={12}
							>
								<Grid item md={6} xs={12} padding={projectItemPadding}>
									<ProjectItem backgroundColor={"#9b59b6"} />
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
