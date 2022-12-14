import { ChangeEvent } from "react";
import { ObjectType } from "../../types";
import "./styles.scss";

type OptionType = string | { label: string; value: string };

type TogglePropTypes = {
	options: [OptionType, OptionType];
	name: string;
	data: ObjectType;
	setData: React.Dispatch<React.SetStateAction<ObjectType>>;
};

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

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		setData(ps => ({ ...ps, [name]: values[checked ? 1 : 0] }));
	};

	return (
		<div className="toggle">
			<h5 className={data[name] === values[0] ? "active" : ""}>{labels[0]}</h5>
			<input type="checkbox" id={name} checked={data[name] === values[1]} onChange={handleChange} />
			<label htmlFor={name} tabIndex={0}></label>
			<h5 className={data[name] === values[1] ? "active" : ""}>{labels[1]}</h5>
		</div>
	);
};

export default Toggle;
