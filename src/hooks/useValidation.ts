import { MouseEvent, useCallback, useEffect, useState } from "react";
import { ObjectType } from "../types";
import validationSchema from "./validationSchema";

type useValidationReturnType = {
	errors: {};
	reset: () => void;
	onSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
};

type useValidationType = (
	data: ObjectType,
	handleSubmit: () => void,
	onError: () => void
) => useValidationReturnType;

const useValidation: useValidationType = (data, handleSubmit, onError) => {
	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		setTouched(true);
		setSubmitting(true);
	};

	const reset = useCallback(() => {
		setTouched(false);
		setSubmitting(false);
		setErrors({});
	}, []);

	const checkForError = useCallback(async () => {
		if (!touched) return;
		let schema = validationSchema;
		try {
			await schema.validate(data, { abortEarly: false });
			setErrors({});
			submitting && handleSubmit();
		} catch (err: any) {
			setSubmitting(false);
			const errors = {} as ObjectType;
			err.inner.forEach((error: ObjectType) => (errors[error.path] = error.message));
			setErrors(errors);
			submitting && onError();
		}
		//eslint-disable-next-line
	}, [data, touched, submitting]);

	useEffect(() => {
		checkForError();
	}, [checkForError]);
	return { errors, onSubmit, reset };
};

export default useValidation;
