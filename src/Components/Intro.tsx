import { Avatar, Typography, Stack } from "@mui/material";
import prashanth_rebala from "../Assets/prashanth_rebala.jpg";

export const Intro = () => {
	return (
		<Stack
			sx={{ bgcolor: "text.primary", color: "#eee" }}
			direction={{ xs: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
			gap={3}
			minHeight="100vh"
		>
			<Avatar src={prashanth_rebala} sx={{ width: "16rem", height: "16rem" }} />
			<Stack margin={1}>
				<Typography variant="h5">Hi! I'm</Typography>
				<Typography variant="h3">Prashanth Rebala</Typography>
			</Stack>
		</Stack>
	);
};
