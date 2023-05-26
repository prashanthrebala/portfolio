import { Box, Typography, Stack, Divider, Slide, Chip } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useInView } from "react-intersection-observer";

export const WorkTimelineItem = ({ exp, parentRef }: any) => {
	const { ref, inView } = useInView({ triggerOnce: true });

	return (
		<TimelineItem ref={ref}>
			<TimelineOppositeContent
				sx={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s" }}
			>
				{exp["dates_short"]}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot />
				<TimelineConnector />
			</TimelineSeparator>
			<Slide
				direction="left"
				in={inView}
				container={parentRef?.current}
				{...(inView ? { timeout: 500 } : {})}
			>
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
							width: { xs: "100%", md: "80%" },
							paddingTop: "1rem",
							paddingBottom: "1rem",
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
						<Box padding={2}>
							{exp["skills"].map((skill: string, idx: number) => {
								return (
									<Chip
										key={idx}
										label={skill}
										sx={{
											color: "#fff",
											fontSize: "0.9rem",
											margin: "0.25rem",
											backgroundColor: "#0B510B",
										}}
									/>
								);
							})}
						</Box>
					</Box>
				</TimelineContent>
			</Slide>
		</TimelineItem>
	);
};
