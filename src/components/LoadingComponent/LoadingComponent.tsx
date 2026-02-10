import LoadingIcon from "../../assets/resources/congrats.png";
import "./LoadingComponent.css";
import "./animation.css";

export const LoadingComponent = () => {
	return <img src={LoadingIcon} alt="Loading Icon" className="loading-icon" />;
};
