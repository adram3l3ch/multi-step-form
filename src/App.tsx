import Info from "./components/Info";
import MultiStepForm from "./components/MultiStepForm";
import { Step } from "./components/MultiStepForm/types";
import Plan from "./components/Plan";
import { ObjectType } from "./types";

const steps: Step[] = [
	{
		title: "YOUR INFO",
		Component: Info,
	},
	{
		title: "SELECT PLAN",
		Component: Plan,
	},
	{
		title: "ADD-ONS",
	},
	{
		title: "SUMMARY",
	},
];

function App() {
	const handleSubmit = (data: ObjectType) => {
		console.log(data);
	};
	return (
		<div className="container">
			<MultiStepForm steps={steps} handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
