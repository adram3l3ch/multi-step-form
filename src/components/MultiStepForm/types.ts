import { ComponentPropsType, ObjectType } from "../../types";
import * as Yup from "yup";

export type MultiStepFormPropsType = {
	steps: Step[];
	handleSubmit?: (params: ObjectType) => void;
	initialValue: ObjectType;
};

export type Step = {
	title: string;
	Component?: (props: ComponentPropsType) => JSX.Element;
};

export type Billing = "Yearly" | "Monthly";

export type Plans = "arcade" | "advanced" | "pro";
