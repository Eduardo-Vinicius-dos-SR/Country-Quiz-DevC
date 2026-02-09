import "./QuizSection.css";
import type { RefObject } from "react";

interface QuizSectionProps {
	score: number;
	actualQuestion: number;
	question: string;
	questions: {
		id: number;
		question: string;
		options: string[];
		correctAnswer: string;
	}[];
	handleAnswer: (e: React.MouseEvent<HTMLButtonElement>, answer: string) => Promise<void>;
	answersRef: RefObject<HTMLDivElement>;
	CheckIcon: string;
	CloseIcon: string;
}

export const QuizSection = ({
	score,
	actualQuestion,
	question,
	questions,
	handleAnswer,
	answersRef,
	CheckIcon,
	CloseIcon,
}: QuizSectionProps) => {
	return (
		<section className="quiz-section">
			<div className="head">
				<h2>Country Quiz</h2>
				<div className="score">
					<p>🏆&nbsp; {score}/10 Points</p>
				</div>
			</div>

			<div className="questions">
				<ol className="question-list">
					{[...Array(10)].map((_, i) => (
						<li key={i} className={i <= actualQuestion ? "answered" : ""}>
							<p>{i + 1}</p>
						</li>
					))}
				</ol>
				<p className="question">{question}</p>
				<div className="answers" ref={answersRef}>
					{questions[actualQuestion].options.map((answer: string, index: number) => (
						<button key={index} onClick={(e) => handleAnswer(e, answer)} className="answer-button">
							<p>{answer}</p>
							{answer === questions[actualQuestion].correctAnswer ? (
								<img src={CheckIcon} alt="Correct icon" className="answer-icon" />
							) : (
								<img src={CloseIcon} alt="Wrong icon" className="answer-icon" />
							)}
						</button>
					))}
				</div>
			</div>
		</section>
	);
};
