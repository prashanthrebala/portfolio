import darwinbox from "../Assets/darwinbox.jpg";
import microsoft from "../Assets/microsoft.png";

export const work_experience = {
	professional: [
		{
			company: "Microsoft",
			title: "Software Engineer 2",
			dates: "July 2019 to July 2022",
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
			location: "Bangalore, India",
			duration: "6 months",
			description: [
				"Migrated MileIQ's data aggregation process to Azure Event Hubs, resulting in significant increase in the efficiency and real-time processing of user's drives.",
			],
			skills: ["Python", "Django", "Express"],
			image: microsoft,
		},
		{
			company: "Microsoft",
			title: "Software Engineering Intern",
			dates: "May 2018 to July 2018",
			location: "Bangalore, India",
			duration: "2 months",
			description: [
				"Developed an e-receipt parser for Spend, which was seamlessly integrated as an Outlook mailbox extension, allowing users to conveniently record expenses directly from their mailbox.",
			],
			skills: ["Python", "Django", "NLP"],
			image: microsoft,
		},
		{
			company: "Darwinbox",
			title: "Software Engineering Intern",
			dates: "April 2017 to June 2017",
			location: "Hyderabad, India",
			duration: "2 months",
			description: [
				"Contributed to the development of the visual analytics panel for the company's website, providing powerful data-driven insights for stakeholders.",
				"Built a resume parser to streamline the hiring process for companies, resulting in improved efficiency and a more seamless experience for both applicants and recruiters.",
			],
			skills: ["Python", "Javascript"],
			image: darwinbox,
		},
	],
};
