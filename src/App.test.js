import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('matches the snapshot', () => {
	const snapshot = render(<App />);

	expect(snapshot).toMatchSnapshot();
});
