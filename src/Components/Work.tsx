import { Box, Grid } from "@mui/material";
import { WorkCard } from "./WorkCard";
import Carousel from "react-material-ui-carousel";
import { work_experience } from "../Content/work_experience";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";

// TODO: Add type to work exp
export const Work = () => {
	const experiences = work_experience.professional;
	const [displayValue, setDisplayValue] = React.useState("none");
	setTimeout(() => setDisplayValue("block"), 1000);

	return (
		<Box
			sx={{
				minHeight: "100vh",
				bgcolor: "#124312",
				color: "#eee",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid container justifyContent={"center"} alignItems={"center"}>
				<Grid
					item
					xs={1}
					display={{ xs: "none", md: "flex" }}
					justifyContent={"center"}
				>
					Left
				</Grid>
				<Grid item xs={12} md={8} display={"flex"} justifyContent={"center"}>
					<Carousel
						IndicatorIcon={
							<CircleIcon sx={{ height: "0.5rem", width: "0.5rem" }} />
						}
						duration={500}
						sx={{
							width: { xs: "90%", md: "90%" },
							display: displayValue,
						}}
						indicatorIconButtonProps={{
							style: {
								padding: "0 0.3rem",
							},
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
									image={exp["image" as keyof typeof exp]}
								/>
							);
						})}
					</Carousel>
				</Grid>
				<Grid
					item
					xs={1}
					display={{ xs: "none", md: "flex" }}
					justifyContent={"center"}
				>
					Right
				</Grid>
			</Grid>
		</Box>
	);
};
