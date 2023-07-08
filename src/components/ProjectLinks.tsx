import { Grid, Link, Tooltip, useTheme } from "@mui/material";
import { AiOutlineGithub, AiFillYoutube } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { RiArticleLine } from "react-icons/ri";
import { ProjectLinkProps } from "../interfaces/interfaces";

interface LinkGridItem {
	title: string;
	children: React.ReactNode;
	targetLink?: string;
}

const LinkGridItem = ({ title, targetLink, children }: LinkGridItem) => {
	const theme = useTheme();
	return targetLink ? (
		<Tooltip title={title}>
			<Link
				href={targetLink}
				target="_blank"
				rel="noopener noreferrer"
				underline="none"
				color="inherit"
			>
				<Grid
					item
					sx={{
						transition: "transform 0.3s",
						[theme.breakpoints.up("md")]: {
							"&:hover": {
								transform: "scale(1.3)",
							},
						},
					}}
				>
					{children}
				</Grid>
			</Link>
		</Tooltip>
	) : null;
};

const ProjectLinks = ({
	iconSize,
	liveSiteLink,
	githubLink,
	youtubeLink,
	paperLink,
}: ProjectLinkProps) => {
	const ITEM_SIZE = iconSize ?? 25;
	const DISABLED_COLOR = "#5A5A5A";
	return (
		<Grid container display={"flex"} justifyContent={"center"} gap={2}>
			<LinkGridItem targetLink={liveSiteLink} title={"View site"}>
				<TbWorldWww size={ITEM_SIZE} />
			</LinkGridItem>
			<LinkGridItem targetLink={githubLink} title={"View Source Code"}>
				<AiOutlineGithub size={ITEM_SIZE} />
			</LinkGridItem>
			<LinkGridItem targetLink={youtubeLink} title={"View Video"}>
				<AiFillYoutube size={ITEM_SIZE} />
			</LinkGridItem>
			<LinkGridItem targetLink={paperLink} title={"View Paper"}>
				<RiArticleLine size={ITEM_SIZE} />
			</LinkGridItem>
		</Grid>
	);
};

export default ProjectLinks;
