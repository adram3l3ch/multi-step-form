import MultiStepForm from "./components/MultiStepForm";
import { steps, SuccessPage } from "./steps";
import { ObjectType } from "./types";

const initialValue = {
	plan: "arcade",
	billing: "Monthly",
	addons: [],
};

function App() {
	const handleSubmit = (data: ObjectType) => {
		console.log(data);
	};
	return (
		<main className="container">
			<MultiStepForm
				steps={steps}
				handleSubmit={handleSubmit}
				initialValue={initialValue}
				SuccessPage={SuccessPage}
			/>
		</main>
	);
}

export default App;
