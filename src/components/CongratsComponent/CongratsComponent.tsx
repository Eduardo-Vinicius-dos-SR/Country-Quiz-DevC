import "./CongratsComponent.css";
import "./CongratsComponent.responsive.css";
import congratsImage from "../../assets/resources/congrats.png";

interface CongratsComponentProps {
	score: number;
	maxScore: number;
	restartFunction: React.MouseEventHandler<HTMLButtonElement>;
}

export const CongratsComponent = ({ score, maxScore, restartFunction }: CongratsComponentProps) => {
	return (
		<section className="congrats-section celebration">
			<img src={congratsImage} alt="Congrats Image" className="congrats-image" />

			<h2>Congrats! You completed the quiz.</h2>

			<p>
				You answer {score}/{maxScore} correctly
			</p>

			<button className="play-again-btn" onClick={restartFunction}>
				<p>Play again</p>
			</button>
		</section>
	);
};
