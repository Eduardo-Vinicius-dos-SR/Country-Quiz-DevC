import "./CongratsComponent.css";
import congratsImage from "../../assets/resources/congrats.png";

interface CongratsComponentProps {
	score: number;
	restartFunction: React.MouseEventHandler<HTMLButtonElement>;
}

export const CongratsComponent = ({ score, restartFunction }: CongratsComponentProps) => {
	return (
		<section className="congrats-section">
			<img src={congratsImage} alt="Congrats Image" className="congrats-image" />

			<h2>Congrats! You completed the quiz.</h2>

			<p>You answer {score}/10 correctly</p>

			<button className="play-again-btn" onClick={restartFunction}>
				<p>Play again</p>
			</button>
		</section>
	);
};
