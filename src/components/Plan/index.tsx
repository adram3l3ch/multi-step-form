import { ComponentPropsType } from "../../types";
import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";
import { ChangeEvent, useEffect } from "react";
import Toggle from "../Toggle";
import { billingPlans } from "../../data";
import "./styles.scss";

type Billing = "Yearly" | "Monthly";
type Plans = "arcade" | "advanced" | "pro";

const Plan = (props: ComponentPropsType) => {
	const { data, setData } = props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id } = e.currentTarget;
		setData(ps => ({ ...ps, plan: id }));
	};

	useEffect(() => {
		if (!data.plan) {
			setData(ps => ({ ...ps, plan: "arcade" }));
		}
	}, []);

	const images = [arcade, advanced, pro];

	const plans = ["arcade", "advanced", "pro"].map((ele, i: number) => {
		return (
			<div className="plan">
				<input
					type="radio"
					id={ele}
					name="plan"
					onChange={handleChange}
					checked={data.plan === ele}
				/>
				<label htmlFor={ele} tabIndex={0}>
					<img src={images[i]} alt={ele} />
					<h4>{ele}</h4>
					<p>
						${billingPlans[data.billing as Billing]?.[ele as Plans]}/
						{data.billing === "Monthly" ? "mo" : "yr"}
					</p>
					{data.billing === "Yearly" && <p>2 months free</p>}
				</label>
			</div>
		);
	});

	return (
		<form className="form">
			<h2>Select your plan</h2>
			<p>You have the option of monthly or yearly billing.</p>
			<div className="plans">{plans}</div>
			<div className="billing">
				<Toggle options={["Monthly", "Yearly"]} name="billing" data={data} setData={setData} />
			</div>
		</form>
	);
};

export default Plan;
