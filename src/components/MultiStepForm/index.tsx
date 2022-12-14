import { useState } from "react";
import { MultiStepFormPropsType } from "./types";
import useValidation from "../../hooks/useValidation";
import "./styles.scss";

const MultiStepForm = (props: MultiStepFormPropsType) => {
	const { steps, handleSubmit, initialValue, SuccessPage } = props;
	const [currentStep, setCurrentStep] = useState(0);
	const [multiStepFormData, setMultiFormData] = useState(initialValue || {});
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleNextPrev = (val: -1 | 1) => {
		setCurrentStep(ps => ps + val);
		reset();
	};

	const onSubmit = () => {
		setHasSubmitted(true);
		handleSubmit?.(multiStepFormData);
		setMultiFormData(initialValue);
		reset();
	};

	const Component = steps[currentStep].Component;
	const isLastStep = currentStep === steps.length - 1;
	const isFirstStep = currentStep === 0;
	const submitFn = isLastStep ? onSubmit : () => handleNextPrev(1);
	const errFn = () => setCurrentStep(0);

	const { errors, onSubmit: _onSubmit, reset } = useValidation(multiStepFormData, submitFn, errFn);

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

	return (
		<div className="multiStepForm">
			<div className="steps custom__scrollbar">{stepsElement}</div>
			<section className="content">
				{hasSubmitted ? (
					<div className="step__component custom__scrollbar">
						<SuccessPage
							setData={setMultiFormData}
							data={multiStepFormData}
							errors={errors}
							currentStep={currentStep}
							setCurrentStep={setCurrentStep}
						/>
					</div>
				) : (
					<>
						<div className="step__component custom__scrollbar">
							<Component
								setData={setMultiFormData}
								data={multiStepFormData}
								errors={errors}
								currentStep={currentStep}
								setCurrentStep={setCurrentStep}
							/>
						</div>
						<div className="btns">
							{isFirstStep || (
								<button className="goBack" onClick={() => handleNextPrev(-1)}>
									Go Back
								</button>
							)}
							<button className={isLastStep ? "submit" : "next"} onClick={_onSubmit}>
								{isLastStep ? "Confirm" : "Next Step"}
							</button>
						</div>
					</>
				)}
			</section>
		</div>
	);
};

export default MultiStepForm;
