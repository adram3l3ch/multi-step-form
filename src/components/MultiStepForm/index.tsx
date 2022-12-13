import { useState } from "react";
import { MultiStepFormPropsType } from "./types";
import "./styles.scss";
import useValidation from "../../hooks/useValidation";

const MultiStepForm = (props: MultiStepFormPropsType) => {
	const { steps, handleSubmit, initialValue } = props;
	const [currentStep, setCurrentStep] = useState(0);
	const [multiStepFormData, setMultiFormData] = useState(initialValue || {});

	const stepsElement = steps.map((step, i) => {
		const isActive = currentStep === i;
		const className = isActive ? "step active" : "step";
		return (
			<div className={className} key={i} onClick={() => setCurrentStep(i)}>
				<div className="index">{i + 1}</div>
				<div className="title">
					<p>STEP {i + 1}</p>
					<h3>{step.title}</h3>
				</div>
			</div>
		);
	});

	const Component = steps[currentStep].Component;

	const handleNextPrev = (val: -1 | 1) => {
		setCurrentStep(ps => ps + val);
		reset();
	};

	const onSubmit = () => {
		handleSubmit?.(multiStepFormData);
	};

	const {
		errors,
		onSubmit: _onSubmit,
		reset,
	} = useValidation(
		multiStepFormData,
		currentStep === steps.length - 1 ? onSubmit : () => handleNextPrev(1),
		() => setCurrentStep(0)
	);

	return (
		<div className="multiStepForm">
			<div className="steps">{stepsElement}</div>
			<section className="content">
				{Component && (
					<Component setData={setMultiFormData} data={multiStepFormData} errors={errors} />
				)}
				<div className="btns">
					{currentStep !== 0 && (
						<button className="goBack" onClick={() => handleNextPrev(-1)}>
							Go Back
						</button>
					)}
					{currentStep === steps.length - 1 ? (
						<button className="submit" onClick={_onSubmit}>
							Confirm
						</button>
					) : (
						<button className="next" onClick={_onSubmit}>
							Next Step
						</button>
					)}
				</div>
			</section>
		</div>
	);
};

export default MultiStepForm;
