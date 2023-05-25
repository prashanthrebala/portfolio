import { Grid, Typography } from "@mui/material";
import { ProjectItem } from "./ProjectItem";
import scatterBG from "../Assets/polygon-scatter-haikei.svg";

export const Projects = () => {
	return (
		<>
			<Grid
				minHeight={"100vh"}
				container
				direction={{ md: "row", xs: "column" }}
				sx={{
					backgroundColor: "rgba(0, 0, 0, 0)",
					position: "relative",
					backgroundImage: `url(${scatterBG})`,
					backgroundSize: "cover",
				}}
			>
				<Grid
					item
					xs={2}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
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
			</Grid>
		</>
	);
};
