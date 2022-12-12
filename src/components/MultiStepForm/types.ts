import { ComponentPropsType, ObjectType } from "../../types";

export type MultiStepFormPropsType = {
	steps: Step[];
	handleSubmit?: (params: ObjectType) => void;
};

export type Step = {
	title: string;
	Component?: (props: ComponentPropsType) => JSX.Element;
};
