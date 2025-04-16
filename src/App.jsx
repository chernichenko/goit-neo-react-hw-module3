import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const getInitialFeedback = () => {
  const saved = localStorage.getItem("feedback");
  return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
};

const App = () => {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total ? Math.round((feedback.good / total) * 100) : 0;

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        hasFeedback={total > 0}
      />
      {total > 0 ? (
        <Feedback
          feedback={feedback}
          total={total}
          positivePercentage={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;