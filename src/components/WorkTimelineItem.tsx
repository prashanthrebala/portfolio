import { useContext } from "react";
import { Box, Typography, Stack, Divider, Slide, Chip } from "@mui/material";
import { WorkItemProps } from "../interfaces/interfaces";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useInView } from "react-intersection-observer";
import codeBracket from "../assets/code_bracket.png";
import { BreakpointsContext } from "../contexts/BreakpointsContext";

export const WorkTimelineItem = (props: { experience: WorkItemProps }) => {
	const { experience } = props;
	const { company, title, dates, from_date, to_date, duration } = experience;
	const { image, skills, description } = experience;
	const { mdScreen } = useContext(BreakpointsContext);
	const { ref, inView } = useInView({
		threshold: mdScreen ? 0.5 : 0.1,
		triggerOnce: true,
	});

	return (
		<TimelineItem ref={ref}>
			{mdScreen && (
				<TimelineOppositeContent
					sx={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s" }}
				>
					{from_date} to
					<br />
					{to_date}
				</TimelineOppositeContent>
			)}
			<TimelineSeparator>
				<TimelineDot sx={{ backgroundColor: "#dedede" }}>
					<Box
						sx={{
							backgroundImage: `url(${image})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							height: { xs: "1em", md: "1.6em" },
							width: { xs: "1em", md: "1.6em" },
						}}
					/>
				</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<Slide direction="left" in={inView} {...(inView ? { timeout: 500 } : {})}>
				<TimelineContent>
					<Typography variant="h5" marginBottom={1}>
						{company}
					</Typography>
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
						<Typography
							fontSize={{ xs: "0.75em", sm: "0.875rem" }}
							textAlign={"center"}
						>
							{title}
						</Typography>
						<Typography
							fontSize={{ xs: "0.75em", sm: "0.875rem" }}
							textAlign={"center"}
						>
							{mdScreen ? duration : dates}
						</Typography>
					</Stack>
					<Box
						sx={{
							overflow: "hidden",
							width: { xs: "100%", md: "80%" },
							paddingY: { xs: "0.75rem", md: "1rem" },
						}}
					>
						{description.map((item: string, idx: number) => {
							return (
								<Typography
									key={idx}
									variant="body2"
									sx={{
										lineHeight: "1.5rem",
										marginLeft: { md: "0.8rem" },
										marginY: "0.5rem",
									}}
									textAlign={"justify"}
								>
									{item}
								</Typography>
							);
						})}
						<Box paddingTop={2}>
							{skills.map((skill: string, idx: number) => {
								return (
									<Chip
										key={idx}
										label={skill}
										sx={{
											color: "#fff",
											fontSize: "0.9rem",
											margin: "0.25rem",
											backgroundColor: "#146C94",
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

export const EmptyWorkTimelineItem = () => {
	const { mdScreen } = useContext(BreakpointsContext);
	return (
		<TimelineItem>
			{mdScreen && <TimelineOppositeContent />}
			<TimelineSeparator>
				<TimelineDot sx={{ backgroundColor: "#dedede" }}>
					<Box
						sx={{
							backgroundImage: `url(${codeBracket})`,
							backgroundSize: "contain",
							backgroundPosition: "center",
							height: { xs: "1em", md: "1.6em" },
							width: { xs: "1em", md: "1.6em" },
						}}
					></Box>
				</TimelineDot>
			</TimelineSeparator>
			<TimelineContent />
		</TimelineItem>
	);
};
