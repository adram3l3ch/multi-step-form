export type ObjectType = { [key: string]: any };

export type ComponentPropsType = {
	data: ObjectType;
	setData: React.Dispatch<React.SetStateAction<ObjectType>>;
	errors: ObjectType;
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};
