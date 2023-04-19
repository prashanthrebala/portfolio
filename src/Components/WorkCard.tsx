import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Chip,
	Divider,
	Stack,
	Box,
	Button,
} from "@mui/material";

export const WorkCard = (props: any) => {
	const { company, description, skills, dates, duration, title } = props;
	const [collapsed, setCollapsed] = React.useState(false);
	const handleCollapse = () => {
		setCollapsed(!collapsed);
	};

	return (
		// import microsoft from "../Assets/microsoft-logo.webp";
		// <Card
		// 	sx={{
		// 		backgroundImage: `url(${microsoft})`,
		// 		backgroundRepeat: "no-repeat",
		// 		backgroundSize: "cover",
		// 	}}
		// >
		<Card
			sx={{
				backgroundColor: "#0C0C0D",
				color: "#dcdde1",
				minWidth: "20rem",
				margin: "0rem 0.5rem",
				// minHeight: "13rem",
				maxHeight: collapsed ? "13rem" : "auto",
			}}
		>
			<CardContent
				sx={{
					color: "#A6A6A6",
					display: "flex",
					flexDirection: "column",
					minHeight: "13rem",
				}}
			>
				<Typography variant="h5">{company}</Typography>
				<Typography sx={{ fontSize: "1rem" }}>{title}</Typography>
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
					<Typography variant="body2" color={"grey"}>
						{dates}
					</Typography>
					<Typography variant="body2" color={"grey"}>
						{duration}
					</Typography>
				</Stack>
				<Box sx={{ overflow: "hidden" }}>
					{description.map((item: string) => {
						return (
							<Typography variant="body2" color="#A6A6A6">
								{item}
							</Typography>
						);
					})}
				</Box>
			</CardContent>
			<Box
				onClick={handleCollapse}
				sx={{
					backgroundImage:
						"linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(255, 12, 13, 1))",
				}}
			>
				View More
			</Box>
			<Box
				sx={{ marginTop: "auto", display: "flex", flexWrap: "wrap", p: 1.5 }}
			>
				{skills.map((skill: string, idx: number) => {
					return (
						<Chip
							key={idx}
							label={skill}
							sx={{ m: "0.2rem", backgroundColor: "black", color: "#A6A6A6" }}
						></Chip>
					);
				})}
			</Box>
		</Card>
	);
};
