import * as Yup from "yup";

export default Yup.object().shape({
	name: Yup.string()
		.min(3, "Minimum 3 characters required")
		.matches(/^[a-zA-Z\s_]*$/, "Invalid character in name")
		.required("Name is Required"),
	email: Yup.string()
		.matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid mail address")
		.required("Email is Required"),
	phone: Yup.string()
		.min(3, "Minimum 3 characters required")
		.matches(/^[+0-9\s]*$/, "Invalid character in phone number")
		.required("Phone number is Required"),
});
