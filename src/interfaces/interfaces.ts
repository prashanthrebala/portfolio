interface ProjectItemProps {
	backgroundColor: string;
	backgroundImage: string;
	backgroundPosition: string;
	backgroundSize: string;
	children: React.ReactNode;
	targetLink: string;
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

export type { ProjectItemProps, SkillMasonryItemProps, WorkItemProps };
