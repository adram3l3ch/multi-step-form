import { ChangeEvent } from "react";
import { ComponentPropsType } from "../../types";

const Info = (props: ComponentPropsType) => {
	const { data, setData } = props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const name = e.target.name as "name" | "email" | "phone";
		const _data = { ...data };
		_data[name] = value;
		setData(_data);
	};

	return (
		<form className="form info">
			<h2>Personal info</h2>
			<p>Please provide your name, email, address, and phone number.</p>
			<div className="input__group">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					placeholder="e.g. Stephen King"
					value={data.name || ""}
					onChange={handleChange}
					name="name"
					id="name"
				/>
			</div>
			<div className="input__group">
				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					placeholder="e.g. Stephenking@lorem.com"
					value={data.email || ""}
					onChange={handleChange}
					name="email"
					id="email"
				/>
			</div>
			<div className="input__group">
				<label htmlFor="phone">Phone Number</label>
				<input
					type="tel"
					placeholder="e.g. +1 234 567 890"
					value={data.phone || ""}
					onChange={handleChange}
					name="phone"
					id="phone"
				/>
			</div>
		</form>
	);
};

export default Info;
