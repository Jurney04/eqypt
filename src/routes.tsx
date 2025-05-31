import { createBrowserRouter, createHashRouter } from "react-router";
import App from "./pages/App";
import { Header } from "./components/Header";
import { DagelijksLeven } from "./pages/DagelijksLeven";
import { Religie } from "./pages/Religie";
import { Inhoud } from "./pages/Inhoud";
import { Oefening } from "./pages/Oefening";
import { Goden, Mummificatie } from "./components";

export const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "/dagelijks-leven",
		element: <DagelijksLeven />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "/religie",
		element: <Religie />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "/religie/mummificatie",
		element: <Mummificatie />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "/religie/goden",
		element: <Goden />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "/inhoud",
		element: <Inhoud />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
	{
		path: "/oefening",
		element: <Oefening />,
		children: [
			{
				path: "",
				element: <Header />,
			},
		],
	},
]);
