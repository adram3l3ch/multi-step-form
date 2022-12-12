import { useState } from "react";
import { MultiStepFormPropsType } from "./types";
import "./styles.scss";

const MultiStepForm = (props: MultiStepFormPropsType) => {
	const { steps, handleSubmit } = props;
	const [currentStep, setCurrentStep] = useState(0);
	const [multiStepFormData, setMultiFormData] = useState({});

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
	};

	const onSubmit = () => {
		handleSubmit?.(multiStepFormData);
	};

	return (
		<div className="multiStepForm">
			<div className="steps">{stepsElement}</div>
			<section className="content">
				{Component && <Component setData={setMultiFormData} data={multiStepFormData} />}
				<div className="btns">
					{currentStep !== 0 && (
						<button className="goBack" onClick={() => handleNextPrev(-1)}>
							Go Back
						</button>
					)}
					{currentStep === steps.length - 1 ? (
						<button className="submit" onClick={onSubmit}>
							Confirm
						</button>
					) : (
						<button className="next" onClick={() => handleNextPrev(1)}>
							Next Step
						</button>
					)}
				</div>
			</section>
		</div>
	);
};

export default MultiStepForm;
