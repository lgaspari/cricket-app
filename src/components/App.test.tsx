import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

// mocks
window.HTMLMediaElement.prototype.play = jest.fn();

test('can play cricket sound', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button'));
  expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
});
