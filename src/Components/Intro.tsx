import { Avatar, Typography, Stack } from "@mui/material";
import { LetterComponent } from "./LetterComponent";
import prashanth_rebala from "../Assets/prashanth_rebala.jpg";
import scatterBG from "../Assets/polygon-scatter-haikei.svg";

export const Intro = () => {
	return (
		<Stack
			sx={{
				color: "#eee",
				backgroundImage: `url(${scatterBG})`,
				backgroundSize: "cover",
			}}
			direction={{ xs: "column", md: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
			gap={3}
			minHeight="100vh"
		>
			<Avatar src={prashanth_rebala} sx={{ width: "16rem", height: "16rem" }} />
			<Stack margin={1}>
				<Typography variant="h5">Hi! I'm</Typography>
				<Typography variant="h3" sx={{ fontWeight: "bold" }}>
					{"Prashanth Rebala".split("").map((letter, idx) => (
						<LetterComponent letter={letter} animationDuration={40 * idx} />
					))}
				</Typography>
			</Stack>
		</Stack>
	);
};
