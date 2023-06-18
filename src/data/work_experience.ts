import darwinbox from "../assets/darwinbox.png";
import microsoft from "../assets/microsoft.png";

export const work_experience = {
	professional: [
		{
			company: "Microsoft",
			title: "Software Engineer 2",
			dates: "July 2019 to July 2022",
			from_date: "July 2019",
			to_date: "July 2022",
			dates_short: "Jul '19 to Jul '22",
			location: "Bangalore, India",
			duration: "3 years",
			description: [
				"Redesigned Microsoft Teams' Search Results Page to provide more context around search results and enhance the user experience.",
				"Implemented hover actions on search results to enable frequently used functionalities such as Reply-to, Voice/Video Call, and Email resulting in improved user engagement and convenience.",
				"Utilized various testing frameworks such as Cypress and Protractor to automate end-to-end testing of the entire search experience leading to better development.",
				"Added support for Bing Speller suggestion to Teams' Search.",
			],
			skills: [
				"React",
				"Typescript",
				"HTML/CSS/JS",
				"Apollo GraphQL",
				"Cypress",
				"Angular",
				"Protractor",
			],
			image: microsoft,
		},
		{
			company: "Microsoft",
			title: "Software Engineering Intern",
			dates: "January 2019 to June 2019",
			from_date: "January 2019",
			to_date: "June 2019",
			dates_short: "Jan '19 to Jun '19",
			location: "Bangalore, India",
			duration: "6 months",
			description: [
				"Migrated MileIQ's data aggregation process to Azure Event Hubs, resulting in significant increase in the efficiency and real-time processing of user's drives.",
			],
			skills: ["Python", "Django", "Express", "MySQL"],
			image: microsoft,
		},
		{
			company: "Microsoft",
			title: "Software Engineering Intern",
			dates: "May 2018 to July 2018",
			from_date: "May 2018",
			to_date: "July 2018",
			dates_short: "May '18 to Jul '18",
			location: "Bangalore, India",
			duration: "2 months",
			description: [
				"Developed an e-receipt parser for Spend, which was seamlessly integrated as an Outlook mailbox extension, allowing users to conveniently record expenses directly from their mailbox.",
			],
			skills: ["Python", "Django", "NLP", "Graph API"],
			image: microsoft,
		},
		{
			company: "Darwinbox",
			title: "Software Engineering Intern",
			dates: "April 2017 to June 2017",
			from_date: "April 2017",
			to_date: "June 2017",
			dates_short: "Apr '17 to Jun '17",
			location: "Hyderabad, India",
			duration: "2 months",
			description: [
				"Contributed to the development of the visual analytics panel for the company's website, providing powerful data-driven insights for stakeholders.",
				"Built a resume parser to streamline the hiring process for companies, resulting in improved efficiency and a more seamless experience for both applicants and recruiters.",
			],
			skills: ["Python", "Javascript", "NLP"],
			image: darwinbox,
		},
	],
};
