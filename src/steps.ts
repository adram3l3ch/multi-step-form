import AddOns from "./components/Addons";
import Info from "./components/Info";
import { Step } from "./components/MultiStepForm/types";
import Plan from "./components/Plan";
import Summary from "./components/Summary";

export const steps: Step[] = [
	{
		title: "YOUR INFO",
		Component: Info,
	},
	{
		title: "SELECT PLAN",
		Component: Plan,
	},
	{
		title: "ADD-ONS",
		Component: AddOns,
	},
	{
		title: "SUMMARY",
		Component: Summary,
	},
];
