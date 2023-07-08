// TODO all props are marked as optional for now
// change it once all Project Items are implemented
interface ProjectItemProps {
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundPosition?: string;
	backgroundSize?: string;
	children?: React.ReactNode;
}

interface SkillMasonryItemProps {
	icon: string;
	height: string;
	name?: string;
}

interface WorkItemProps {
	company: string;
	title: string;
	dates: string;
	from_date: string;
	to_date: string;
	dates_short: string;
	location: string;
	duration: string;
	image: string;
	description: string[];
	skills: string[];
}

interface ProjectLinkProps {
	iconSize?: number;
	liveSiteLink?: string;
	githubLink?: string;
	youtubeLink?: string;
	paperLink?: string;
}

export type {
	ProjectItemProps,
	SkillMasonryItemProps,
	WorkItemProps,
	ProjectLinkProps,
};
