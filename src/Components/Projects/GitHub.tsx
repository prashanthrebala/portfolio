import { AiOutlineGithub } from "react-icons/ai";
import { ProjectItem } from "../ProjectItem";
import { Box } from "@mui/material";

export const GitHub = () => {
	return (
		<ProjectItem
			backgroundColor={"#1e272e"}
			targetLink="https://github.com/prashanthrebala"
		>
			<Box
				display={"flex"}
				flexDirection={{ md: "column" }}
				justifyContent={"center"}
				gap={{ md: 2 }}
				alignItems={"center"}
				color={"#F2F2F2"}
			>
				<AiOutlineGithub size={120} />
				<Box
					sx={{
						width: { xs: "50%", sm: "100%" },
						textAlign: "center",
					}}
				>
					View more on <b>GitHub</b>
				</Box>
			</Box>
		</ProjectItem>
	);
};
