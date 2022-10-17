import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const RESPONSES = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

export function App() {
  const [goodOption, setGoodOption] = useState(0);
  const [neutralOption, setNeutralOption] = useState(0);
  const [badOption, setBadOption] = useState(0);

  const responses = [goodOption, neutralOption, badOption];

  const leaveFeedback = e => {
    const btnType = e.target.value;

    if (btnType === RESPONSES.good) {
      setGoodOption(option => option + 1);
    }
    if (btnType === RESPONSES.neutral) {
      setNeutralOption(option => option + 1);
    }
    if (btnType === RESPONSES.bad) {
      setBadOption(option => option + 1);
    }
  };

  const countTotalFeedback = () =>
    responses.reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () =>
    Math.round((goodOption / countTotalFeedback()) * 100);

  return (
    <div>
      <Section title="Please leave your feadback">
        <FeedbackOptions onLeaveFeedback={leaveFeedback} options={RESPONSES} />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={goodOption}
            neutral={neutralOption}
            bad={badOption}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="No feadback yet" />
        </Section>
      )}
    </div>
  );
}
