import successImg from "../../assets/icon-thank-you.svg";
import "./styles.scss";

const Success = () => {
	return (
		<div className="success">
			<img src={successImg} alt="success" aria-hidden />
			<h2>Thank you!</h2>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
				need support, please feel free to email us at support@loremgaming.com.
			</p>
		</div>
	);
};

export default Success;
