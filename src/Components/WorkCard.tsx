import React from "react";
import { Typography, Chip, Divider, Stack, Box, Grid } from "@mui/material";

export const WorkCard = (props: any) => {
	const { company, description, skills, dates, duration, title, image } = props;

	return (
		<Grid
			container
			direction={{ xs: "column", lg: "row" }}
			height={"80vh"}
			justifyContent={"space-evenly"}
			sx={{
				backgroundColor: "rgba(20, 143, 140, 0.8)",
				p: 2,
				borderRadius: "2rem",
			}}
		>
			<Grid
				item
				xs={6}
				sx={{
					background: `url(${image})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			/>
			<Grid
				item
				xs={6}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={{ xs: "flex-start", md: "center" }}
				p={1}
			>
				<Grid
					container
					sx={{
						height: "8rem",
						color: "black",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="h3">{company}</Typography>
					<Typography variant="body1">{title}</Typography>
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
						<Typography variant="body1" color={"black"}>
							{dates}
						</Typography>
						<Typography variant="body1" color={"black"}>
							{duration}
						</Typography>
					</Stack>
				</Grid>
				<Divider flexItem sx={{ bgcolor: "grey" }} light />
				<Box
					sx={{ overflow: "hidden", padding: "1rem 2rem", color: "black" }}
					textAlign={"justify"}
				>
					{description.map((item: string, idx: number) => {
						return (
							<Typography key={idx} variant="body2">
								{item}
							</Typography>
						);
					})}
				</Box>
				<Box
					sx={{ padding: "0 2rem" }}
					display={{ xs: "none", md: "flex" }}
					justifyContent={"center"}
					alignItems={"center"}
					flexWrap={"wrap"}
					height={"7rem"}
				>
					{skills.map((skill: string, idx: number) => {
						return (
							<Chip
								key={idx}
								label={skill}
								sx={{
									color: "#fff",
									fontSize: "0.9rem",
									margin: "0 0.25rem",
									backgroundColor: "#023535",
								}}
							></Chip>
						);
					})}
				</Box>
			</Grid>
		</Grid>
	);
};
