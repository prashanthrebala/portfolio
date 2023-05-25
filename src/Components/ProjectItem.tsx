import { Paper } from "@mui/material";
import React from "react";

export const ProjectItem = (props: any) => {
	const { name, backgroundColor } = props;

	return (
		<Paper
			sx={{ height: "100%", backgroundColor, minHeight: "27vh" }}
			elevation={3}
		>
			{name}
		</Paper>
	);
};
