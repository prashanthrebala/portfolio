import React from "react";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { work_experience } from "../Content/work_experience";
import blob_background from "../Assets/blob-haikei.svg";

export const WorkTimeline = () => {
	const experiences = work_experience.professional;
	return (
		<Grid
			sx={{
				color: "#eee",
				minHeight: "100vh",
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "center",
				alignItems: "flex-start",
			}}
		>
			<Grid
				container
				sx={{
					backgroundImage: `url(${blob_background})`,
					backgroundSize: "cover",
					minHeight: "inherit",
					justifyContent: "center",
					alignItems: "center",
					width: { xs: "100%", md: "30%" },
					position: "sticky",
					top: 0,
					bottom: 0,
				}}
			>
				<Grid
					item
					sx={{
						padding: "2rem 0rem",
						position: "sticky",
						top: 0,
						bottom: 0,
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontWeight: "bold",
							padding: "0rem 2rem",
							textAlign: "center",
						}}
					>
						Work
					</Typography>
					<Typography
						variant="h2"
						sx={{
							fontWeight: "bold",
							padding: "0rem 2rem",
							textAlign: "center",
						}}
					>
						Experience
					</Typography>
				</Grid>
			</Grid>
			<Grid
				sx={{
					backgroundColor: "#0B3317",
					width: { xs: "100%", md: "70%" },
					display: "flex",
					justifyContent: "flex-start",
				}}
			>
				<Timeline
					sx={{
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.2,
						},
					}}
				>
					{experiences.map((exp, idx) => {
						return (
							<TimelineItem>
								<TimelineOppositeContent>
									{exp["dates_short"]}
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Typography variant="h5">{exp["company"]}</Typography>
									<Stack
										direction="row"
										divider={
											<Divider
												orientation="vertical"
												flexItem
												sx={{ bgcolor: "grey" }}
												light
											/>
										}
										spacing={1}
									>
										<Typography variant="body2">{exp["title"]}</Typography>
										<Typography variant="body2">{exp["duration"]}</Typography>
									</Stack>
									<Box
										sx={{
											overflow: "hidden",
											width: "80%",
											paddingTop: "1rem",
											paddingBottom: "3rem",
										}}
										textAlign={"justify"}
									>
										<ul>
											{exp["description"].map((item: string, idx: number) => {
												return (
													<li>
														<Typography
															key={idx}
															variant="body2"
															sx={{ lineHeight: "1.5rem" }}
														>
															{item}
														</Typography>
													</li>
												);
											})}
										</ul>
									</Box>
								</TimelineContent>
							</TimelineItem>
						);
					})}
				</Timeline>
			</Grid>
		</Grid>
	);
};
