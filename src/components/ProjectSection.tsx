import React from "react";
import { Projects } from "./Projects";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

export const ProjectSection = () => {
	const { ref, inView } = useInView({
		threshold: 1,
		triggerOnce: true,
	});

	return (
		<>
			<SectionFader sectionRef={ref} sectionInView={inView} />
			<Projects inView={inView} />
		</>
	);
};

const SectionFader = ({ sectionRef, sectionInView }: any) => {
	return (
		<Box
			ref={sectionRef}
			sx={{
				// backgroundImage: `linear-gradient(#260037, #371148)`,
				backgroundColor: "#F6F1F1",
				height: { xs: "0vh", md: "20vh" },
				overflowX: "hidden",
			}}
		>
			{/* <Box
				sx={{
					backgroundColor: "#260037",
					opacity: sectionInView ? 0 : 1,
					color: "#dfdfdf",
					height: "100%",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: { xs: "2em", md: "6em" },
					fontWeight: "200",
					transition: "opacity 0.8s",
				}}
			>
				PROJECTS
			</Box> */}
		</Box>
	);
};
