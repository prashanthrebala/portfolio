import React, { useRef } from "react";
import { Grid, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { work_experience } from "../Content/work_experience";
import blob_background from "../Assets/blob-haikei.svg";
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
							fontFamily: "Courier New",
						}}
					>
						work experience
						<div
							style={{ display: "unset", opacity, transition: "opacity 0.3s" }}
						>
							▮
						</div>
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				ref={workExpRef}
				sx={{
					backgroundColor: "#0B3317",
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
