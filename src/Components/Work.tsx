import { Box, Stack } from "@mui/material";
import { WorkCard } from "./WorkCard";
import workexp from "../Content/work_experience.json";

// TODO: Add type to work exp
export const Work = () => {
	const experiences = workexp.professional;

	return (
		<Box
			sx={{
				bgcolor: "#000",
				color: "#eee",
				// overflow: "auto",
				display: "flex",
				flexDirection: "row",
				padding: "1rem",
				overflowX: "hidden",
				alignItems: "flex-start",
			}}
		>
			{experiences.map((exp, idx) => {
				return (
					<WorkCard
						key={idx}
						company={exp["company" as keyof typeof exp]}
						title={exp["title"] as keyof typeof exp}
						dates={exp["dates"] as keyof typeof exp}
						description={exp["description" as keyof typeof exp]}
						skills={exp["skills" as keyof typeof exp]}
						duration={exp["duration" as keyof typeof exp]}
					/>
				);
			})}
		</Box>
	);
};
