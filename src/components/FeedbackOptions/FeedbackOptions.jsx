import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onLeaveFeedback,
  options: { good, neutral, bad },
}) => {
  return (
    <List>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={good}>
          {good}
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={neutral}>
          {neutral}
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onLeaveFeedback} value={bad}>
          {bad}
        </Button>
      </li>
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};
