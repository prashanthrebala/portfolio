import React from "react";
import { WorkTimeline } from "./WorkTimeline";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

export const WorkExperience = () => {
	const { ref, inView } = useInView({
		threshold: 1,
		triggerOnce: true,
	});

	return (
		<>
			<SectionFader sectionRef={ref} sectionInView={inView} />
			<WorkTimeline inView={inView} />
		</>
	);
};

const SectionFader = ({ sectionRef, sectionInView }: any) => {
	return (
		<Box
			ref={sectionRef}
			sx={{
				backgroundImage: `linear-gradient(#150026, #260037)`,
				height: { xs: "20vh", md: "40vh" },
			}}
		>
			<Box
				sx={{
					backgroundColor: "#150026",
					opacity: sectionInView ? 0 : 1,
					color: "#dfdfdf",
					height: "100%",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "6em",
					fontWeight: "200",
					transition: "opacity 0.8s",
				}}
			>
				WORK EXPERIENCE
			</Box>
		</Box>
	);
};
