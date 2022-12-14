import { ComponentPropsType, ObjectType } from "../../types";

export type MultiStepFormPropsType = {
	steps: Step[];
	handleSubmit?: (params: ObjectType) => void;
	initialValue: ObjectType;
	SuccessPage: (props: ComponentPropsType) => JSX.Element;
};

export type Step = {
	title: string;
	Component: (props: ComponentPropsType) => JSX.Element;
};

export type Billing = "Yearly" | "Monthly";

export type Plans = "arcade" | "advanced" | "pro";
