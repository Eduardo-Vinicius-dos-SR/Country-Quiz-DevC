import { useState, useRef } from "react";
import CheckIcon from "../../assets/resources/Check_round_fill.svg";
import CloseIcon from "../../assets/resources/Close_round_fill.svg";
import url from "../../json/quiz.json";
import { QuizSection } from "../QuizSection/QuizSection";
import { CongratsComponent } from "../CongratsComponent/CongratsComponent";
import LoadingIcon from "../../assets/resources/congrats.png";
import "./LoadingComponent.css";

export const QuizComponent = () => {
	const questions = url.questions;
	const answersRef = useRef<HTMLDivElement>(null);

	const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [actualQuestion, setActualQuestion] = useState(0);
	const [question, setQuestion] = useState(questions[0].question);

	const [score, setScore] = useState<number>(0);

	function restart() {
		setActualQuestion(0);
		setQuestion(questions[0].question);
		setQuizCompleted(false);
		setScore(0);
	}

	function resetButtonClasses() {
		const buttons = answersRef.current?.querySelectorAll(".answer-button");
		buttons?.forEach((button) => {
			button.classList.remove("selected", "correct", "wrong");
		});
	}

	async function handleAnswer(e: React.MouseEvent<HTMLButtonElement>, answer: string) {
		e.currentTarget.classList.add("selected");

		const correctQuestion = questions[actualQuestion].correctAnswer;

		const answerButtons = document.querySelectorAll(".answer-button");

		answerButtons.forEach((button) => {
			(button as HTMLButtonElement).disabled = true;
			setTimeout(() => {
				if (button.textContent === correctQuestion) {
					button.classList.add("correct");
				}
			}, 1500);
		});

		if (answer === correctQuestion) {
			e.currentTarget.classList.add("correct");
			setScore(score + 1);
		} else {
			e.currentTarget.classList.add("wrong");
		}

		setTimeout(() => {
			const nextQuestion = actualQuestion + 1;
			if (nextQuestion < questions.length) {
				resetButtonClasses();
				setActualQuestion(nextQuestion);
				setQuestion(questions[nextQuestion].question);
				answerButtons.forEach((button) => {
					(button as HTMLButtonElement).disabled = false;
				});
			} else {
				setQuizCompleted(true);
			}
		}, 4000);
	}

	setTimeout(() => {
		setIsLoading(false);
	}, 5000);
	return (
		<>
			{isLoading ? (
				<img src={LoadingIcon} alt="Loading Icon" className="loading-icon" />
			) : !quizCompleted ? (
				<QuizSection
					score={score}
					maxScore={questions.length}
					actualQuestion={actualQuestion}
					question={question}
					questions={questions}
					handleAnswer={handleAnswer}
					answersRef={answersRef as React.RefObject<HTMLDivElement>}
					CheckIcon={CheckIcon}
					CloseIcon={CloseIcon}
				/>
			) : (
				<CongratsComponent score={score} maxScore={questions.length} restartFunction={restart} />
			)}
		</>
	);
};
