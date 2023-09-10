import { Grid, Typography } from "@mui/material";
import { HandJutsu } from "./Projects/HandJutsu";
import { ArticleSummarizr } from "./Projects/ArticleSummarizr";
import { JustBreathe } from "./Projects/JustBreathe";
import { Trails } from "./Projects/Trails";
import { GitHub } from "./Projects/GitHub";
import { Illusia } from "./Projects/Illusia";

export const Projects = ({ sectionRef }: any) => {
	const projectItemPadding = 2;

	return (
		<>
			<Grid
				ref={sectionRef}
				minHeight={"100vh"}
				container
				direction={{ md: "row", xs: "column" }}
				sx={{
					scrollSnapAlign: "start",
					backgroundColor: "#E6E1E1",
					position: "relative",
					backgroundSize: "auto 100%",
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
						fontWeight={"300"}
						sx={{
							transform: { md: "rotate(-90deg)" },
							// textShadow: "0.05em 0.05em 0.5em black",
							fontSize: { xs: "3em", md: "3.5em", lg: "6em" },
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
							<Illusia />
						</Grid>

						<Grid container item md={8} xs={12}>
							<Grid item md={6} xs={12} padding={projectItemPadding}>
								<Trails />
							</Grid>
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
