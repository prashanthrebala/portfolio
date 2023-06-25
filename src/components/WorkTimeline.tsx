import React, { useRef } from "react";
import { Grid, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import { WorkItemProps } from "../interfaces/interfaces";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { work_experience } from "../data/work_experience";
import { WorkTimelineItem, EmptyWorkTimelineItem } from "./WorkTimelineItem";

export const WorkTimeline = ({ inView }: any) => {
	const experiences: WorkItemProps[] = work_experience.professional;
	const workExpRef = useRef(null);
	return (
		<Grid
			container
			sx={{
				// backgroundColor: inView ? "#260037" : "#150026",
				backgroundColor: "#F6F1F1",
				color: "#000",
				minHeight: "100vh",
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "center",
				alignItems: "flex-start",
				transition: "background-color 0.8s",
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
					<WorkExperienceFlicker />
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
					{experiences.map((experience, idx) => {
						return <WorkTimelineItem experience={experience} key={idx} />;
					})}
					<EmptyWorkTimelineItem />
				</Timeline>
			</Grid>
		</Grid>
	);
};

const WorkExperienceFlicker = () => {
	const [opacity, setOpacity] = React.useState(0);
	React.useEffect(() => {
		const timer = setInterval(() => {
			setOpacity((prevValue) => 1 - prevValue);
		}, 400);
		return () => clearInterval(timer);
	}, []);
	return (
		<Typography
			sx={{
				fontSize: { xs: "2.5em", lg: "3.5em" },
				fontWeight: "bold",
				paddingLeft: { xs: "0.8em", md: "1.6em" },
				fontFamily: "Courier Prime",
			}}
		>
			work experience
			<span style={{ display: "unset", opacity, transition: "opacity 0.3s" }}>
				▮
			</span>
		</Typography>
	);
};
