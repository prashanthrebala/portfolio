import react from "../assets/React.svg";
import mongo from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import node from "../assets/NodeJS.svg";
import cypress from "../assets/cypress.svg";
import graphql from "../assets/graphql.svg";
import git from "../assets/git.svg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import angular from "../assets/angular.svg";
import mysql from "../assets/mysql.svg";
import html from "../assets/html-5.svg";
import css from "../assets/css-3.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";

export const skills = {
	skillSet: [
		{
			name: "React",
			icon: react,
			height: "5rem",
		},
		{
			name: "NodeJS",
			icon: node,
			height: "4rem",
		},
		{
			name: "MongoDB",
			icon: mongo,
			height: "2rem",
		},
		{
			name: "Express",
			icon: express,
			height: "2rem",
		},
		{
			name: "Typescript",
			icon: typescript,
			height: "4rem",
		},
		{
			name: "HTML",
			icon: html,
			height: "5rem",
		},
		{
			name: "CSS",
			icon: css,
			height: "5rem",
		},
		{
			name: "JavaScript",
			icon: javascript,
			height: "4rem",
		},
		{
			name: "GraphQL",
			icon: graphql,
			height: "5rem",
		},
		{
			name: "Cypress",
			icon: cypress,
			height: "4rem",
		},
		{
			name: "Git",
			icon: git,
			height: "5rem",
		},
		{
			name: "Python",
			icon: python,
			height: "4rem",
		},
		{
			name: "Java",
			icon: java,
			height: "5rem",
		},
		{
			name: "Angular",
			icon: angular,
			height: "4rem",
		},
		{
			name: "MySQL",
			icon: mysql,
			height: "3rem",
		},
	],
	categories: [
		{
			title: "Web Development",
			items: [
				"React",
				"TypeScript",
				"HTML",
				"CSS",
				"JavaScript",
				"Node.js",
				"Express",
			],
		},
		{
			title: "Programming Languages",
			items: ["JavaScript", "Python", "Java", "C#"],
		},
		{
			title: "Databases",
			items: ["MongoDB", "MySQL"],
		},
		{
			title: "Data Query Languages",
			items: ["Apollo", "GraphQL"],
		},
		// {
		// 	title: "CSS Frameworks",
		// 	items: ["Tailwind CSS", "Bootstrap"],
		// },
		// {
		// 	title: "Backend Frameworks",
		// 	items: ["Django", "Flask"],
		// },
		{
			title: "Tools",
			items: ["Docker", "Git", "GitHub"],
		},
		{
			title: "Testing",
			items: ["Jest", "Cypress"],
		},
	],
};
