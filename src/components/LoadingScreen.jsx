import { useProgress } from "@react-three/drei";

export const LoadingScreen = ({ started, onStarted }) => {
  const { progress } = useProgress();
  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        > <span className="progress-number">{progress}</span></div>
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Test Demo</h1>
        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={onStarted}
        >
          Start
        </button>
      </div>
    </div>
  );
};
