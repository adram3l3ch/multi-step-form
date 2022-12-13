import { ChangeEvent, useEffect } from "react";
import { ComponentPropsType } from "../../types";
import "./styles.scss";

type OptionType = string | { label: string; value: string };

type TogglePropTypes = {
	options: [OptionType, OptionType];
	name: string;
} & ComponentPropsType;

const Toggle = (props: TogglePropTypes) => {
	const { name, options, data, setData } = props;
	const [labels, values]: [string[], string[]] = [[], []];
	options.map(ele => {
		if (typeof ele === "string") {
			labels.push(ele);
			values.push(ele);
		} else {
			labels.push(ele.label);
			values.push(ele.value);
		}
	});

	useEffect(() => {
		if (!data[name]) {
			setData(ps => ({ ...ps, [name]: values[0] }));
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		setData(ps => ({ ...ps, [name]: values[checked ? 1 : 0] }));
	};

	return (
		<div className="toggle">
			<h5 className={data[name] === values[0] ? "active" : ""}>{labels[0]}</h5>
			<input type="checkbox" id={name} checked={data[name] === values[1]} onChange={handleChange} />
			<label htmlFor={name}></label>
			<h5 className={data[name] === values[1] ? "active" : ""}>{labels[1]}</h5>
		</div>
	);
};

export default Toggle;
