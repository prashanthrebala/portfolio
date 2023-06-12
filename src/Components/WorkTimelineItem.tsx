import { Box, Typography, Stack, Divider, Slide, Chip } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const WorkTimelineItem = ({ exp, parentRef }: any) => {
	const theme = useTheme();
	const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
	const { ref, inView } = useInView({
		threshold: mediumScreen ? 0.5 : 0.2,
		triggerOnce: true,
	});

	return (
		<TimelineItem ref={ref}>
			{mediumScreen && (
				<TimelineOppositeContent
					sx={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s" }}
				>
					{exp["from_date"]} to
					<br />
					{exp["to_date"]}
				</TimelineOppositeContent>
			)}
			<TimelineSeparator>
				<TimelineDot sx={{ backgroundColor: "#dedede" }}>
					<Box
						sx={{
							backgroundImage: `url(${exp["image"]})`,
							backgroundSize: "contain",
							backgroundPosition: "cover",
							height: "1.6em",
							width: "1.6em",
						}}
					/>
				</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<Slide
				direction="left"
				in={inView}
				container={parentRef?.current}
				{...(inView ? { timeout: 500 } : {})}
			>
				<TimelineContent>
					<Typography variant="h5" marginBottom={1}>
						{exp["company"]}
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
						<Typography variant="body2" textAlign={"center"}>
							{exp["title"]}
						</Typography>
						{mediumScreen ? (
							<Typography variant="body2" textAlign={"center"}>
								{exp["duration"]}
							</Typography>
						) : (
							<Typography variant="body2" textAlign={"center"}>
								{exp["dates"]}
							</Typography>
						)}
					</Stack>
					<Box
						sx={{
							overflow: "hidden",
							width: { xs: "100%", md: "80%" },
							paddingY: "1rem",
						}}
					>
						{exp["description"].map((item: string, idx: number) => {
							return (
								<>
									<Typography
										key={idx}
										variant="body2"
										sx={{
											lineHeight: "1.5rem",
											marginLeft: "0.8rem",
											marginY: "0.5rem",
										}}
									>
										{item}
									</Typography>
								</>
							);
						})}
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
											backgroundColor: "#3c005a",
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
