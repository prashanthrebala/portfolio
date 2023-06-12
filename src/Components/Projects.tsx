import { Grid, Typography, Alert, Snackbar } from "@mui/material";
import { ProjectItem } from "./ProjectItem";
import { ArticleSummarizr } from "./Projects/ArticleSummarizr";
import { GitHub } from "./Projects/GitHub";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Projects = () => {
	const projectItemPadding = 2;
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const theme = useTheme();
	const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<>
			<Snackbar
				open={inView}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<Alert
					variant="filled"
					severity="info"
					sx={{ boxShadow: 12, width: { xs: "80%", md: "70%" } }}
				>
					<Typography variant="body1">
						Currently under construction! I'm working on implementing suitable
						designs for this section of my website. Meanwhile, feel free to
						check out my GitHub. Thank you for your patience!
					</Typography>
				</Alert>
			</Snackbar>

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
						{mediumScreen && (
							<Grid item md={4} xs={12} padding={projectItemPadding}>
								<ProjectItem backgroundColor={"#e67e22"} />
							</Grid>
						)}
					</Grid>
					<Grid container item direction={"column"} md={8} xs={12}>
						<Grid item md={4} xs={12} padding={projectItemPadding}>
							<ProjectItem backgroundColor={"#e74c3c"} />
						</Grid>

						<Grid container item md={8} xs={12}>
							{mediumScreen && (
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
								<Grid
									ref={ref}
									item
									md={6}
									xs={12}
									padding={projectItemPadding}
								>
									<ArticleSummarizr />
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
