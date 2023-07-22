import { Grid } from "@mui/material";
import React from "react";

const MidWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Grid
			width={"100%"}
			height={"100%"}
			display={"flex"}
			justifyContent={"center"}
		>
			<Grid width={"100%"} maxWidth={"1920px"}>
				{children}
			</Grid>
		</Grid>
	);
};

export default MidWrapper;
