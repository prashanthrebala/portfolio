import React, { useRef } from "react";
import { Grid, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { work_experience } from "../Content/work_experience";
import { WorkTimelineItem } from "./WorkTimelineItem";

export const WorkTimeline = () => {
	const experiences = work_experience.professional;
	const workExpRef = useRef(null);
	const [opacity, setOpacity] = React.useState(0);
	React.useEffect(() => {
		const timer = setInterval(() => {
			setOpacity((prevValue) => 1 - prevValue);
		}, 400);
		return () => clearInterval(timer);
	}, []);
	return (
		<Grid
			container
			sx={{
				backgroundColor: "#150026",
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
				item
				sx={{
					minHeight: { md: "inherit" },
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: { xs: "100%", md: "30%" },
					position: { md: "sticky" },
					top: { md: 0 },
					bottom: { md: 0 },
				}}
			>
				<Grid
					item
					sx={{
						width: "100%",
						padding: "2rem 0rem",
						position: { md: "sticky" },
						display: "flex",
						justifyContent: "center",
						top: { md: 0 },
						bottom: { md: 0 },
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: "2.5em", lg: "3.5em" },
							fontWeight: "bold",
							paddingLeft: { xs: "0.8em", md: "1.6em" },
							fontFamily: "Courier New",
						}}
					>
						work experience
						<span
							style={{ display: "unset", opacity, transition: "opacity 0.3s" }}
						>
							▮
						</span>
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				ref={workExpRef}
				sx={{
					width: { xs: "100%", md: "70%" },
					display: "flex",
					justifyContent: "flex-start",
					overflowX: "hidden",
				}}
			>
				<Timeline
					sx={{
						[`& .${timelineOppositeContentClasses.root}`]: {
							flex: 0.2,
						},
						[`& .${timelineItemClasses.root}:before`]: {
							flex: 0,
							padding: 1,
						},
					}}
				>
					{experiences.map((exp, idx) => {
						return <WorkTimelineItem exp={exp} key={idx} />;
					})}
				</Timeline>
			</Grid>
		</Grid>
	);
};
