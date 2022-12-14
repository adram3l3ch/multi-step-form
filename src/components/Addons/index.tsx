import { addons } from "../../data";
import { ComponentPropsType } from "../../types";
import { Billing } from "../MultiStepForm/types";
import "./styles.scss";

const AddOns = (props: ComponentPropsType) => {
	const { data, setData } = props;

	const handleClick = (title: string) => {
		if (data.addons.includes(title)) {
			setData(ps => ({ ...ps, addons: ps.addons.filter((ele: string) => ele !== title) }));
		} else {
			setData(ps => ({ ...ps, addons: [...ps.addons, title] }));
		}
	};

	return (
		<form className="form">
			<h2>Pick add-ons</h2>
			<p>Add-ons help to enhance your gaming experience.</p>
			<div className="addons">
				{addons.map(addon => (
					<div
						className={data.addons.includes(addon.title) ? "addon active" : "addon"}
						onClick={() => handleClick(addon.title)}
						key={addon.title}
					>
						<input
							type="checkbox"
							checked={data.addons.includes(addon.title)}
							onChange={() => handleClick(addon.title)}
						/>
						<div>
							<h4>{addon.title}</h4>
							<p>{addon.desc}</p>
						</div>
						<p className="price">
							+${addon.price[data.billing as Billing]}/
							{data.billing === "Monthly" ? "mo" : "yr"}
						</p>
					</div>
				))}
			</div>
		</form>
	);
};

export default AddOns;
